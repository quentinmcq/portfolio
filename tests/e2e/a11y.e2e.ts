import { expect, test, type Page } from '@playwright/test'
import axe from 'axe-core'

declare global {
  interface Window {
    axe: typeof axe
  }
}

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

const SETTLE = `
  html { scroll-behavior: auto !important; }
  .section { content-visibility: visible !important; }
  .js [data-reveal] { opacity: 1 !important; transform: none !important; }
  * { transition: none !important; animation: none !important; }
`

async function violations(page: Page): Promise<string[]> {
  await page.addStyleTag({ content: SETTLE })
  await page.addScriptTag({ content: axe.source })
  await page.evaluate(() => document.fonts.ready)

  const results = await page.evaluate(
    async (tags) =>
      await window.axe.run(document, {
        resultTypes: ['violations'],
        runOnly: { type: 'tag', values: tags }
      }),
    WCAG_TAGS
  )

  return results.violations.map(
    (violation) => `${violation.id} — ${violation.nodes.map((node) => node.target).join(', ')}`
  )
}

test.describe('accessibility', () => {
  for (const path of ['/', '/en/']) {
    test(`has no WCAG violation on ${path}`, async ({ page }) => {
      await page.goto(path)

      expect(await violations(page)).toEqual([])
    })
  }

  test('has no WCAG violation in light theme', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('theme', 'light'))
    await page.goto('/')
    await expect(page.locator('html')).toHaveClass(/theme-light/)

    expect(await violations(page)).toEqual([])
  })

  test('has no WCAG violation with the mobile menu open', async ({ page }) => {
    await page.setViewportSize({ height: 844, width: 390 })
    await page.goto('/')
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()

    expect(await violations(page)).toEqual([])
  })
})
