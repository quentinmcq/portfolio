const GITHUB_USERNAME = 'quentinmcq'
const LINKEDIN_USERNAME = 'quentin-macq'

export const CONTACTS = {
  email: 'contact@quentin-macq.dev',
  github: `https://github.com/${GITHUB_USERNAME}`,
  githubHandle: `@${GITHUB_USERNAME}`,
  linkedin: `https://fr.linkedin.com/in/${LINKEDIN_USERNAME}`,
  linkedinHandle: `@${LINKEDIN_USERNAME}`,
} as const

// Helper for project repo URLs built on top of the GitHub profile.
export function repoUrl(slug: string): string {
  return `${CONTACTS.github}/${slug}`
}
