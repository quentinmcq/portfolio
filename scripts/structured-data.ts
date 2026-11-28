import type fr from '../src/locales/fr'

export type Messages = typeof fr

export interface Contacts {
  email: string
  github: string
  linkedin: string
}

export interface CaseEntry {
  figure: { src: string }
  site?: string
  slug: string
}

export interface ListedProject {
  link?: string
  slug?: string
  title: string
  year: string
}

interface Context {
  cases: CaseEntry[]
  contacts: Contacts
  homeUrl: string
  locale: string
  messages: Messages
  projectUrl: (slug: string) => string
  site: string
}

export interface HomeData extends Context {
  jobTitle: string
  knowsAbout: string[]
}

export interface ProjectData extends Context {
  project: ListedProject & { slug: string }
}

// Schools named in the background section (« IUT · Lens », « … · EPSI Lille »).
const SCHOOLS = ['IUT de Lens', 'EPSI Lille']

export function homeStructuredData(data: HomeData): string {
  const { contacts, homeUrl, locale, messages, site } = data
  const projects = messages.project.list as ListedProject[]

  return jsonLd([
    {
      '@id': personId(site),
      '@type': 'Person',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FR',
        addressRegion: 'Hauts-de-France'
      },
      alumniOf: SCHOOLS.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
      email: `mailto:${contacts.email}`,
      image: `${site}/og.png`,
      jobTitle: data.jobTitle,
      knowsAbout: data.knowsAbout,
      name: 'Quentin Macq',
      sameAs: [contacts.github, contacts.linkedin],
      url: `${site}/`,
      worksFor: {
        '@type': 'Organization',
        name: 'Motoblouz',
        url: 'https://www.motoblouz.com'
      }
    },
    {
      '@id': `${homeUrl}#website`,
      '@type': 'WebSite',
      author: { '@id': personId(site) },
      inLanguage: locale,
      name: 'Quentin Macq',
      url: homeUrl
    },
    {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        item: creativeWork(data, project),
        position: index + 1
      })),
      name: messages.project['main-title']
    }
  ])
}

export function projectStructuredData(data: ProjectData): string {
  const { homeUrl, messages, project, site } = data
  const pageUrl = data.projectUrl(project.slug)

  return jsonLd([
    { '@id': personId(site), '@type': 'Person', name: 'Quentin Macq', url: `${site}/` },
    creativeWork(data, project),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Quentin Macq', url: homeUrl },
        { name: messages.project['main-title'], url: `${homeUrl}#project` },
        { name: project.title, url: pageUrl }
      ].map(({ name, url }, index) => ({
        '@type': 'ListItem',
        item: url,
        name,
        position: index + 1
      }))
    }
  ])
}

function creativeWork(context: Context, project: ListedProject) {
  const { cases, locale, messages, site } = context
  const entry = cases.find((candidate) => candidate.slug === project.slug)
  const ledes = messages.project.cases as Record<string, { lede: string }>
  const sameAs = [entry?.site, project.link].filter(Boolean)

  return {
    '@type': 'CreativeWork',
    author: { '@id': personId(site) },
    dateCreated: project.year,
    description: entry ? ledes[entry.slug]?.lede : undefined,
    image: entry ? new URL(entry.figure.src, site).href : undefined,
    inLanguage: locale,
    name: project.title,
    sameAs: sameAs.length ? sameAs : undefined,
    url: entry ? context.projectUrl(entry.slug) : project.link
  }
}

function personId(site: string): string {
  return `${site}/#person`
}

function jsonLd(graph: unknown[]): string {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })

  return `<script type="application/ld+json">${json.replaceAll('<', '\\u003c')}</script>`
}
