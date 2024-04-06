export interface Hobby {
  title: string
  button: string
  description: string
  cover: string
  link?: string
  links?: string
  images?: {
    [year: number]: string[]
  }
}
