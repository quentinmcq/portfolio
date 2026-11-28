import { expect, test } from '@playwright/test'

test.describe('prerendered documents', () => {
  test('serves the French page at /', async ({ request }) => {
    const html = await (await request.get('/')).text()

    expect(html).toContain('<html lang="fr"')
    expect(html).toContain('<title>Quentin Macq — Développeur full-stack</title>')
    expect(html).toContain('<link rel="canonical" href="https://quentin-macq.dev/" />')
    expect(html).toContain('Travaux')
    expect(html).toContain('Bomberman')
    expect(html).not.toContain('<div id="app"></div>')
  })

  test('serves the English page at /en/', async ({ request }) => {
    const html = await (await request.get('/en/')).text()

    expect(html).toContain('<html lang="en"')
    expect(html).toContain('<title>Quentin Macq — Full-stack developer</title>')
    expect(html).toContain('<link rel="canonical" href="https://quentin-macq.dev/en/" />')
    expect(html).toContain('property="og:locale" content="en_US"')
    expect(html).toContain('property="og:image" content="https://quentin-macq.dev/og-en.png"')
    expect(html).toContain('Off-screen')
  })

  test('links both languages to each other', async ({ request }) => {
    for (const path of ['/', '/en/']) {
      const html = await (await request.get(path)).text()

      expect(html, path).toContain(
        '<link rel="alternate" hreflang="fr" href="https://quentin-macq.dev/" />'
      )
      expect(html, path).toContain(
        '<link rel="alternate" hreflang="en" href="https://quentin-macq.dev/en/" />'
      )
      expect(html, path).toContain(
        '<link rel="alternate" hreflang="x-default" href="https://quentin-macq.dev/" />'
      )
    }
  })

  test('describes the person in the language of the page', async ({ request }) => {
    for (const [path, jobTitle] of [
      ['/', 'Développeur full-stack'],
      ['/en/', 'Full-stack developer']
    ]) {
      const html = await (await request.get(path)).text()

      expect(html, path).toContain(`"jobTitle":"${jobTitle}"`)
      expect(html, path).toContain('property="og:image:alt"')
    }
  })

  test('summarises the site for language models', async ({ request }) => {
    const response = await request.get('/llms.txt')
    const text = await response.text()

    expect(response.ok()).toBe(true)
    expect(text).toMatch(/^# Quentin Macq\n/)
    expect(text).toContain('Site: https://pokebrawl.fr')
    expect(text).toContain('Email: contact@quentin-macq.dev')
  })

  test('lists both languages in the sitemap', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text()

    expect(xml).toContain('<loc>https://quentin-macq.dev/</loc>')
    expect(xml).toContain('<loc>https://quentin-macq.dev/en/</loc>')
  })
})

test.describe('project pages', () => {
  test('serves one prerendered page per project and language', async ({ request }) => {
    for (const [path, twin, title] of [
      ['/projets/pokebrawl/', '/en/projects/pokebrawl/', '<title>PokéBrawl — Quentin Macq</title>'],
      ['/en/projects/pokebrawl/', '/projets/pokebrawl/', '<title>PokéBrawl — Quentin Macq</title>']
    ]) {
      const html = await (await request.get(path)).text()

      expect(html, path).toContain(title)
      expect(html, path).toContain(
        `<link rel="canonical" href="https://quentin-macq.dev${path}" />`
      )
      expect(html, path).toContain(`href="https://quentin-macq.dev${twin}"`)
      expect(html, path).toContain(`data-twin="${twin}"`)
      expect(html, path).toContain('"@type":"BreadcrumbList"')
      expect(html, path).toMatch(/<h1 class="case__title"/)
    }
  })

  test('lists every project page in the sitemap', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text()

    expect(xml).toContain('<loc>https://quentin-macq.dev/projets/pokedate/</loc>')
    expect(xml).toContain('<loc>https://quentin-macq.dev/en/projects/pokedate/</loc>')
  })

  test('opens a project page from the home page and switches its language', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Page du projet — PokéDate' }).click()

    await expect(page).toHaveURL(/\/projets\/pokedate\/$/)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('PokéDate.')

    await page.getByRole('link', { name: 'EN', exact: true }).click()
    await expect(page).toHaveURL(/\/en\/projects\/pokedate\/$/)

    await page.goto('/projets/pokedate/')
    await expect(page).toHaveURL(/\/en\/projects\/pokedate\/$/)

    await page.getByRole('link', { name: 'All work' }).click()
    await expect(page).toHaveURL(/\/en\/#project$/)
  })
})

test.describe('language', () => {
  test('switches to English and remembers it', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'EN', exact: true }).click()

    await expect(page).toHaveURL(/\/en\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    const work = page.locator('#project h2')

    await work.scrollIntoViewIfNeeded()
    await expect(work).toHaveText('Work')

    await page.goto('/')
    await expect(page).toHaveURL(/\/en\/$/)

    await page.goto('/#project')
    await expect(page).toHaveURL(/\/en\/#project$/)

    await page.getByRole('link', { name: 'FR', exact: true }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
    expect(new URL(page.url()).pathname).toBe('/')
  })
})

test.describe('interface', () => {
  test('keeps the chosen theme after a reload', async ({ page }) => {
    await page.goto('/')

    const html = page.locator('html')

    await expect(html).toHaveClass(/theme-dark/)
    await page.getByRole('button', { name: 'Passer au thème clair' }).click()
    await expect(html).toHaveClass(/theme-light/)

    await page.reload()
    await expect(html).toHaveClass(/theme-light/)
  })

  test('jumps to a far section from a cold load', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('navigation', { name: 'Navigation principale' })
      .getByRole('link', { name: 'Contact' })
      .click()

    await expect(page).toHaveURL(/#contact$/)
    await expect(page.locator('#contact h2')).toBeInViewport()

    await page.goto('/')
    await page
      .getByRole('navigation', { name: 'Navigation principale' })
      .getByRole('link', { name: 'Hors-écran' })
      .click()

    await expect(page.locator('#hobby h2')).toBeInViewport()
  })

  test('shows the content even when the app module fails to load', async ({ page }) => {
    await page.route('**/assets/*.js', (route) => route.abort())
    await page.goto('/')

    const lastReveal = page.locator('[data-reveal]').last()

    await lastReveal.scrollIntoViewIfNeeded()
    await expect(lastReveal).toHaveCSS('opacity', '1', { timeout: 5_000 })
  })

  test('opens and closes the mobile menu', async ({ page }) => {
    await page.setViewportSize({ height: 844, width: 390 })
    await page.goto('/')
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click()

    const drawer = page.getByRole('dialog', { name: 'Navigation mobile' })

    await expect(drawer).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(drawer).toBeHidden()
  })
})
