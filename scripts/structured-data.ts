import type fr from '../src/locales/fr'

export type Messages = typeof fr

interface Contacts {
  email: string
  github: string
  linkedin: string
}

interface Project {
  link?: string
  slug?: string
  title: string
  year: string
}

export interface PersonPage {
  contacts: Contacts
  jobTitle: string
  knowsAbout: string[]
  locale: string
  messages: Messages
  sites: Record<string, string | undefined>
  site: string
  url: string
}

// Schools named in the background section (« IUT · Lens », « … · EPSI Lille »).
const SCHOOLS = ['IUT de Lens', 'EPSI Lille']

export function homeStructuredData(page: PersonPage): string {
  const { contacts, locale, messages, site, url } = page
  const personId = `${site}/#person`
  const projects = messages.project.list as Project[]
  const cases = messages.project.cases as Record<string, { lede: string }>

  return jsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': personId,
        '@type': 'Person',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FR',
          addressRegion: 'Hauts-de-France'
        },
        alumniOf: SCHOOLS.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
        email: `mailto:${contacts.email}`,
        image: `${site}/og.png`,
        jobTitle: page.jobTitle,
        knowsAbout: page.knowsAbout,
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
        '@id': `${url}#website`,
        '@type': 'WebSite',
        author: { '@id': personId },
        inLanguage: locale,
        name: 'Quentin Macq',
        url
      },
      {
        '@type': 'ItemList',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          item: {
            '@type': 'CreativeWork',
            author: { '@id': personId },
            dateCreated: project.year,
            description: project.slug ? cases[project.slug]?.lede : undefined,
            name: project.title,
            url: (project.slug && page.sites[project.slug]) || project.link
          },
          position: index + 1
        })),
        name: messages.project['main-title']
      }
    ]
  })
}

function jsonLd(data: unknown): string {
  const json = JSON.stringify(data).replaceAll('<', '\\u003c')

  return `<script type="application/ld+json">\n${json}\n</script>`
}
