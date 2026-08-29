export interface Project {
  chips?: string[]
  kind: 'personal' | 'school' | 'work'
  link?: string
  slug?: string
  status?: 'wip'
  subtitle?: string
  title: string
  year: string
}
