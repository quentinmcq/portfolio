import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

import { swapper } from './swap'

const SITE = 'https://quentin-macq.dev'
const MARKER = '<div id="app">'

const LOCALES = ['fr', 'en'] as const

type Locale = (typeof LOCALES)[number]

interface LocaleMeta {
  description: string
  dir: string
  image: string
  ogDescription: string
  ogLocale: string
  path: string
  title: string
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    description:
      'Quentin Macq — full-stack developer with an obsession for front-end performance and emerging tools. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    dir: 'en/',
    image: 'og-en.png',
    ogDescription:
      'Full-stack developer with an obsession for front-end performance and emerging tools. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    ogLocale: 'en_US',
    path: '/en/',
    title: 'Quentin Macq — Full-stack developer'
  },
  fr: {
    description:
      'Quentin Macq — développeur full-stack avec une obsession pour la performance front et les nouveaux outils. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    dir: '',
    image: 'og.png',
    ogDescription:
      'Développeur full-stack avec une obsession pour la performance front et les nouveaux outils. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    ogLocale: 'fr_FR',
    path: '/',
    title: 'Quentin Macq — Développeur full-stack'
  }
}

const swap = swapper('prerender: dist/index.html')

const serverEntry = new URL('../dist-server/entry-server.js', import.meta.url)
const { render } = (await import(serverEntry.href)) as {
  render: (locale: Locale) => Promise<string>
}

const distUrl = new URL('../dist/', import.meta.url)
const template = readFileSync(new URL('index.html', distUrl), 'utf8')

const inlineScript = /<script>([\s\S]*?)<\/script>/.exec(template)?.[1]

if (inlineScript === undefined) {
  throw new Error('prerender: inline script not found in dist/index.html')
}

const digest = `sha256-${createHash('sha256').update(inlineScript).digest('base64')}`

if (!readFileSync(new URL('_headers', distUrl), 'utf8').includes(digest)) {
  throw new Error(`prerender: script-src hash of public/_headers is stale, expected '${digest}'`)
}

const alternates = [
  ...LOCALES.map(
    (locale) => `<link rel="alternate" hreflang="${locale}" href="${SITE}${META[locale].path}" />`
  ),
  `<link rel="alternate" hreflang="x-default" href="${SITE}${META.fr.path}" />`
].join('\n    ')

let injected = 0

for (const locale of LOCALES) {
  const meta = META[locale]
  const markup = await render(locale)

  injected += markup.length

  let html = swap(template, MARKER, MARKER + markup)

  html = swap(
    html,
    `<link rel="canonical" href="${SITE}/" />`,
    `<link rel="canonical" href="${SITE}${meta.path}" />\n    ${alternates}`
  )

  if (locale !== 'fr') {
    html = swap(html, '<html lang="fr"', `<html lang="${locale}"`)
    html = swap(html, META.fr.title, meta.title)
    html = swap(html, META.fr.description, meta.description)
    html = swap(html, META.fr.ogDescription, meta.ogDescription)
    html = swap(
      html,
      `property="og:url" content="${SITE}/"`,
      `property="og:url" content="${SITE}${meta.path}"`
    )
    html = swap(
      html,
      `property="og:locale" content="${META.fr.ogLocale}"`,
      `property="og:locale" content="${meta.ogLocale}"`
    )
    html = swap(
      html,
      `property="og:locale:alternate" content="${meta.ogLocale}"`,
      `property="og:locale:alternate" content="${META.fr.ogLocale}"`
    )
    html = swap(
      html,
      `property="og:image" content="${SITE}/${META.fr.image}"`,
      `property="og:image" content="${SITE}/${meta.image}"`
    )
    html = swap(
      html,
      `name="twitter:image" content="${SITE}/${META.fr.image}"`,
      `name="twitter:image" content="${SITE}/${meta.image}"`
    )
  }

  const outDir = new URL(meta.dir, distUrl)

  mkdirSync(outDir, { recursive: true })
  writeFileSync(new URL('index.html', outDir), html)
}

const lastmod = new Date().toISOString().slice(0, 10)

const urls = LOCALES.map((locale) =>
  [
    '  <url>',
    `    <loc>${SITE}${META[locale].path}</loc>`,
    ...LOCALES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE}${META[alt].path}" />`
    ),
    `    <lastmod>${lastmod}</lastmod>`,
    '  </url>'
  ].join('\n')
).join('\n')

writeFileSync(
  new URL('sitemap.xml', distUrl),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
)

rmSync(new URL('../dist-server/', import.meta.url), { force: true, recursive: true })

console.log(
  `prerender: ${LOCALES.join(' + ')} — ${(injected / 1024).toFixed(1)}KB of markup injected`
)
