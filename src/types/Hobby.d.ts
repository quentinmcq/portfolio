export interface Hobby {
  button: string
  cover: string
  description: string
  images?: {
    [year: number]: string[]
  }
  link?: string
  links?: string
  title: string
}
