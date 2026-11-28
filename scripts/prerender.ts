import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { gzipSync } from 'node:zlib'

import { llmsTxt } from './llms'
import { homeStructuredData, type Messages } from './structured-data'
import { swapper } from './swap'

const SITE = 'https://quentin-macq.dev'
const MARKER = '<div id="app">'

const LOCALES = ['fr', 'en'] as const

const BUDGET_KB = { html: 20, js: 70 }

type Locale = (typeof LOCALES)[number]

interface LocaleMeta {
  description: string
  dir: string
  image: string
  imageAlt: string
  jobTitle: string
  knowsAbout: string[]
  ogDescription: string
  ogLocale: string
  path: string
  title: string
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    description:
      'Quentin Macq — full-stack developer at Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    dir: 'en/',
    image: 'og-en.png',
    imageAlt: 'Quentin Macq, full-stack developer at Motoblouz, Hauts-de-France.',
    jobTitle: 'Full-stack developer',
    knowsAbout: ['Nuxt', 'Vue.js', 'TypeScript', 'Symfony', 'Web performance', 'UX/UI design'],
    ogDescription:
      'Full-stack developer at Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    ogLocale: 'en_US',
    path: '/en/',
    title: 'Quentin Macq — Full-stack developer'
  },
  fr: {
    description:
      'Quentin Macq — développeur full-stack chez Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    dir: '',
    image: 'og.png',
    imageAlt: 'Quentin Macq, développeur full-stack chez Motoblouz, Hauts-de-France.',
    jobTitle: 'Développeur full-stack',
    knowsAbout: ['Nuxt', 'Vue.js', 'TypeScript', 'Symfony', 'Performance web', 'Design UX/UI'],
    ogDescription:
      'Développeur full-stack chez Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    ogLocale: 'fr_FR',
    path: '/',
    title: 'Quentin Macq — Développeur full-stack'
  }
}

const swap = swapper('prerender: dist/index.html')

const serverEntry = new URL('../dist-server/entry-server.js', import.meta.url)
const { CASES, CONTACTS, render, ...messages } = (await import(serverEntry.href)) as {
  CASES: { site?: string; slug: string }[]
  CONTACTS: { email: string; github: string; linkedin: string }
  render: (locale: Locale) => Promise<string>
} & Record<Locale, Messages>

const sites = Object.fromEntries(CASES.map((entry) => [entry.slug, entry.site]))

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

const gzipKB = (content: string | Buffer) => gzipSync(content).length / 1024

const assetsUrl = new URL('assets/', distUrl)
const jsKB = readdirSync(assetsUrl)
  .filter((file) => file.endsWith('.js'))
  .reduce((total, file) => total + gzipKB(readFileSync(new URL(file, assetsUrl))), 0)

if (jsKB > BUDGET_KB.js) {
  throw new Error(
    `prerender: JavaScript weighs ${jsKB.toFixed(1)}KB gzip, budget is ${BUDGET_KB.js}KB`
  )
}

let injected = 0
let htmlKB = 0

for (const locale of LOCALES) {
  const meta = META[locale]
  const markup = await render(locale)

  injected += markup.length

  let html = swap(template, MARKER, MARKER + markup)

  html = swap(
    html,
    '</head>',
    `  ${homeStructuredData({
      contacts: CONTACTS,
      jobTitle: meta.jobTitle,
      knowsAbout: meta.knowsAbout,
      locale,
      messages: messages[locale],
      site: SITE,
      sites,
      url: `${SITE}${meta.path}`
    })}\n  </head>`
  )

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
    html = swap(html, META.fr.imageAlt, meta.imageAlt)
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

  htmlKB = Math.max(htmlKB, gzipKB(html))

  if (htmlKB > BUDGET_KB.html) {
    throw new Error(
      `prerender: ${meta.path} weighs ${htmlKB.toFixed(1)}KB gzip, budget is ${BUDGET_KB.html}KB`
    )
  }

  const outDir = new URL(meta.dir, distUrl)

  mkdirSync(outDir, { recursive: true })
  writeFileSync(new URL('index.html', outDir), html)
}

// The day the content last changed, not the build date: a dependency update redeploys the site
// without changing a word. A shallow clone cannot tell, so the sitemap then leaves lastmod out.
function contentLastModified(): string | undefined {
  try {
    const git = (...args: string[]) =>
      execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()

    if (git('rev-parse', '--is-shallow-repository') !== 'false') {
      return undefined
    }

    return (
      git('log', '-1', '--format=%cs', '--', 'src/locales', 'src/data', 'src/assets') || undefined
    )
  } catch {
    return undefined
  }
}

const lastmod = contentLastModified()

const urls = LOCALES.map((locale) =>
  [
    '  <url>',
    `    <loc>${SITE}${META[locale].path}</loc>`,
    ...LOCALES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE}${META[alt].path}" />`
    ),
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
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

writeFileSync(
  new URL('llms.txt', distUrl),
  llmsTxt({
    contacts: CONTACTS,
    french: `${SITE}${META.fr.path}`,
    home: `${SITE}${META.en.path}`,
    messages: messages.en,
    sites
  })
)

rmSync(new URL('../dist-server/', import.meta.url), { force: true, recursive: true })

console.log(
  `prerender: ${LOCALES.join(' + ')} — ${(injected / 1024).toFixed(1)}KB of markup injected, ` +
    `JS ${jsKB.toFixed(1)}/${BUDGET_KB.js}KB gzip, HTML ${htmlKB.toFixed(1)}/${BUDGET_KB.html}KB gzip`
)
