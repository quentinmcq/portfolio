export interface Hobby {
  button: string
  cover: string
  description: string
  hasImages?: boolean
  link?: string
  links?: { img: string, url: string }[]
  title: string
  type?: string
}
