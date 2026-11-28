import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { gzipSync } from 'node:zlib'

import { llmsTxt } from './llms'
import {
  type CaseEntry,
  type Contacts,
  homeStructuredData,
  type ListedProject,
  type Messages,
  projectStructuredData
} from './structured-data'
import { swapper } from './swap'

const SITE = 'https://quentin-macq.dev'
const MARKER = '<div id="app">'

const LOCALES = ['fr', 'en'] as const

const BUDGET_KB = { html: 20, js: 70 }

type Locale = (typeof LOCALES)[number]

interface Route {
  locale: Locale
  slug?: string
}

interface LocaleMeta {
  description: string
  image: string
  imageAlt: string
  jobTitle: string
  knowsAbout: string[]
  ogDescription: string
  ogLocale: string
  title: string
}

interface Page {
  description: string
  ogDescription: string
  route: Route
  structuredData: string
  title: string
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    description:
      'Quentin Macq — full-stack developer at Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    image: 'og-en.png',
    imageAlt: 'Quentin Macq, full-stack developer at Motoblouz, Hauts-de-France.',
    jobTitle: 'Full-stack developer',
    knowsAbout: ['Nuxt', 'Vue.js', 'TypeScript', 'Symfony', 'Web performance', 'UX/UI design'],
    ogDescription:
      'Full-stack developer at Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    ogLocale: 'en_US',
    title: 'Quentin Macq — Full-stack developer'
  },
  fr: {
    description:
      'Quentin Macq — développeur full-stack chez Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    image: 'og.png',
    imageAlt: 'Quentin Macq, développeur full-stack chez Motoblouz, Hauts-de-France.',
    jobTitle: 'Développeur full-stack',
    knowsAbout: ['Nuxt', 'Vue.js', 'TypeScript', 'Symfony', 'Performance web', 'Design UX/UI'],
    ogDescription:
      'Développeur full-stack chez Motoblouz. Nuxt, Vue, TypeScript, Symfony. Hauts-de-France.',
    ogLocale: 'fr_FR',
    title: 'Quentin Macq — Développeur full-stack'
  }
}

const swap = swapper('prerender: dist/index.html')

const serverEntry = new URL('../dist-server/entry-server.js', import.meta.url)
const { CASES, CONTACTS, render, routePath, ...messages } = (await import(serverEntry.href)) as {
  CASES: CaseEntry[]
  CONTACTS: Contacts
  render: (route: Route) => Promise<string>
  routePath: (route: Route) => string
} & Record<Locale, Messages>

const sites = Object.fromEntries(CASES.map((entry) => [entry.slug, entry.site]))

const url = (route: Route) => `${SITE}${routePath(route)}`

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

function pagesOf(locale: Locale): Page[] {
  const meta = META[locale]
  const context = {
    cases: CASES,
    contacts: CONTACTS,
    homeUrl: url({ locale }),
    locale,
    messages: messages[locale],
    projectUrl: (slug: string) => url({ locale, slug }),
    site: SITE
  }
  const projects = messages[locale].project.list as ListedProject[]
  const ledes = messages[locale].project.cases as Record<string, { lede: string }>

  const home: Page = {
    description: meta.description,
    ogDescription: meta.ogDescription,
    route: { locale },
    structuredData: homeStructuredData({
      ...context,
      jobTitle: meta.jobTitle,
      knowsAbout: meta.knowsAbout
    }),
    title: meta.title
  }

  const projectPages = CASES.map((entry): Page => {
    const project = projects.find((candidate) => candidate.slug === entry.slug)
    const lede = ledes[entry.slug]?.lede

    if (!project || !lede) {
      throw new Error(`prerender: no ${locale} project or lede for "${entry.slug}"`)
    }

    return {
      description: lede,
      ogDescription: lede,
      route: { locale, slug: entry.slug },
      structuredData: projectStructuredData({ ...context, project: { ...project, ...entry } }),
      title: `${project.title} — Quentin Macq`
    }
  })

  return [home, ...projectPages]
}

function head(page: Page): (html: string) => string {
  const { locale } = page.route
  const meta = META[locale]
  const other = LOCALES.find((candidate) => candidate !== locale) ?? 'fr'
  const home = META.fr
  const alternates = [
    ...LOCALES.map(
      (alt) =>
        `<link rel="alternate" hreflang="${alt}" href="${url({ ...page.route, locale: alt })}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${url({ ...page.route, locale: 'fr' })}" />`
  ].join('\n    ')

  return (source) => {
    let html = source

    // The inline script reads data-twin to honour a stored language choice on any page.
    html = swap(
      html,
      '<html lang="fr"',
      `<html lang="${locale}" data-twin="${routePath({ ...page.route, locale: other })}"`
    )
    html = swap(html, home.title, page.title)
    html = swap(html, home.description, page.description)
    html = swap(html, home.ogDescription, page.ogDescription)
    html = swap(html, home.imageAlt, meta.imageAlt)
    html = swap(
      html,
      `<link rel="canonical" href="${SITE}/" />`,
      `<link rel="canonical" href="${url(page.route)}" />\n    ${alternates}`
    )
    html = swap(
      html,
      `property="og:url" content="${SITE}/"`,
      `property="og:url" content="${url(page.route)}"`
    )
    html = swap(
      html,
      `property="og:locale" content="${home.ogLocale}"`,
      `property="og:locale" content="${meta.ogLocale}"`
    )
    html = swap(
      html,
      `property="og:locale:alternate" content="${META.en.ogLocale}"`,
      `property="og:locale:alternate" content="${META[other].ogLocale}"`
    )
    html = swap(
      html,
      `property="og:image" content="${SITE}/${home.image}"`,
      `property="og:image" content="${SITE}/${meta.image}"`
    )
    html = swap(
      html,
      `name="twitter:image" content="${SITE}/${home.image}"`,
      `name="twitter:image" content="${SITE}/${meta.image}"`
    )

    return swap(html, '</head>', `  ${page.structuredData}\n  </head>`)
  }
}

const pages = LOCALES.flatMap(pagesOf)

let injected = 0
let htmlKB = 0

for (const page of pages) {
  const path = routePath(page.route)
  const markup = await render(page.route)

  injected += markup.length

  // Head first, so that no visible text of the page can match a head value.
  const html = swap(head(page)(template), MARKER, MARKER + markup)

  htmlKB = Math.max(htmlKB, gzipKB(html))

  if (htmlKB > BUDGET_KB.html) {
    throw new Error(
      `prerender: ${path} weighs ${htmlKB.toFixed(1)}KB gzip, budget is ${BUDGET_KB.html}KB`
    )
  }

  const outDir = new URL(`.${path}`, distUrl)

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

const urls = pages
  .map(({ route }) =>
    [
      '  <url>',
      `    <loc>${url(route)}</loc>`,
      ...LOCALES.map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt}" href="${url({ ...route, locale: alt })}" />`
      ),
      ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
      '  </url>'
    ].join('\n')
  )
  .join('\n')

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
    french: url({ locale: 'fr' }),
    home: url({ locale: 'en' }),
    messages: messages.en,
    projectUrl: (slug) => url({ locale: 'en', slug }),
    sites
  })
)

rmSync(new URL('../dist-server/', import.meta.url), { force: true, recursive: true })

console.log(
  `prerender: ${pages.length} pages — ${(injected / 1024).toFixed(1)}KB of markup injected, ` +
    `JS ${jsKB.toFixed(1)}/${BUDGET_KB.js}KB gzip, HTML ${htmlKB.toFixed(1)}/${BUDGET_KB.html}KB gzip`
)
