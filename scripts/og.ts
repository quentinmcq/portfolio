import { chromium } from '@playwright/test'
import { readFileSync, writeFileSync } from 'node:fs'

import { swapper } from './swap'

interface Card {
  file: string
  kicker: string
  label: string
  lede: string
}

const CARDS: Card[] = [
  {
    file: 'og.png',
    kicker: 'DÉVELOPPEUR FULL-STACK',
    label: 'Quentin Macq — Développeur full-stack',
    lede: 'Full-stack avec une obsession pour la performance front et les nouveaux outils.'
  },
  {
    file: 'og-en.png',
    kicker: 'FULL-STACK DEVELOPER',
    label: 'Quentin Macq — Full-stack developer',
    lede: 'Full-stack with an obsession for front-end performance and emerging tools.'
  }
]

const FONTS = ['bricolage-grotesque-v9-latin.woff2', 'jetbrains-mono-v24-latin.woff2'] as const

const publicUrl = new URL('../public/', import.meta.url)

const swap = swapper('og: scripts/og.svg')

let template = readFileSync(new URL('og.svg', import.meta.url), 'utf8')

for (const font of FONTS) {
  const data = readFileSync(new URL(`fonts/${font}`, publicUrl), 'base64')

  template = swap(
    template,
    `url('../public/fonts/${font}')`,
    `url('data:font/woff2;base64,${data}')`
  )
}

const [source] = CARDS
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { height: 630, width: 1200 } })

for (const card of CARDS) {
  let svg = swap(template, source.label, card.label)
  svg = swap(svg, source.kicker, card.kicker)
  svg = swap(svg, source.lede, card.lede)

  await page.setContent(
    `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#0d0d10}</style>${svg}`
  )
  await page.evaluate(() => document.fonts.ready)

  const overflows = await page.evaluate(() =>
    [...document.querySelectorAll('text')].flatMap((node) => {
      const width = node.getComputedTextLength()
      const x = Number(node.getAttribute('x'))
      const toEnd = node.getAttribute('text-anchor') === 'end'
      const start = toEnd ? x - width : x
      const end = toEnd ? x : x + width

      return start < 60 || end > 1140 ? [`${node.textContent} (${start} → ${end})`] : []
    })
  )

  if (overflows.length > 0) {
    throw new Error(`og: text out of the safe area in ${card.file} — ${overflows.join(', ')}`)
  }

  const shot = await page.locator('svg').screenshot()

  writeFileSync(new URL(card.file, publicUrl), shot)
  console.log(`og: ${card.file} — ${(shot.length / 1024).toFixed(1)}KB`)
}

await browser.close()
