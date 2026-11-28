import type { Messages } from './structured-data'

interface Contacts {
  email: string
  github: string
  linkedin: string
}

interface Experience {
  kind?: string
  location: string
  subtitle?: string
  title: string
  year: string
}

interface Project {
  chips?: string[]
  kind: string
  link?: string
  slug?: string
  status?: string
  title: string
  year: string
}

export interface LlmsSource {
  contacts: Contacts
  french: string
  home: string
  messages: Messages
  sites: Record<string, string | undefined>
}

// https://llmstxt.org: a Markdown digest of the site, written from the English messages
// so that it never drifts from the pages.
export function llmsTxt({ contacts, french, home, messages, sites }: LlmsSource): string {
  const featured = messages.experience.featured
  const background = messages.experience.list as Experience[]
  const projects = messages.project.list as Project[]
  const cases = messages.project.cases as Record<string, { lede: string }>
  const skills = messages.skill.list as { content: string[]; label: string }[]

  const projectLines = projects.map((project) => {
    const site = project.slug ? sites[project.slug] : undefined
    const lede = project.slug ? cases[project.slug]?.lede : undefined
    const kind = messages.project[`kind-${project.kind}` as 'kind-personal'].toLowerCase()
    const status =
      project.status === 'wip' ? `, ${messages.project['status-wip'].toLowerCase()}` : ''
    const links = [site && `site: ${site}`, project.link && `code: ${project.link}`].filter(Boolean)

    return [
      `- **${project.title}** (${project.year}, ${kind}${status})`,
      lede && `: ${lede}`,
      project.chips?.length && ` Stack: ${project.chips.join(', ')}.`,
      links.length && ` ${capitalize(links.join(' · '))}`
    ]
      .filter(Boolean)
      .join('')
  })

  return [
    `# ${messages.footer.author}`,
    '',
    `> ${messages.header.lede} Hauts-de-France, France.`,
    '',
    `Personal site in English at ${home} and in French at ${french}.`,
    '',
    `## ${messages.skill['main-title']}`,
    '',
    ...skills.map((skill) => `- ${skill.label}: ${skill.content.join(', ')}`),
    '',
    `## ${messages.experience['main-title']}`,
    '',
    `- **${featured.title}** (${featured.period}): ${featured.description}`,
    ...background.map(
      (entry) =>
        `- **${entry.title}** (${entry.year}), ${entry.location}` +
        (entry.subtitle ? `: ${entry.subtitle}` : '')
    ),
    '',
    `## ${messages.project['main-title']}`,
    '',
    ...projectLines,
    '',
    `## ${messages.contact['main-title']}`,
    '',
    `- Email: ${contacts.email}`,
    `- GitHub: ${contacts.github}`,
    `- LinkedIn: ${contacts.linkedin}`,
    ''
  ].join('\n')
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
