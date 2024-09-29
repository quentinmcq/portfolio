import type { Image } from '@/types/Image'

export interface Hobby {
  button: string
  cover: string
  description: string
  images?: Image[]
  link?: string
  links?: { img: string, url: string }[]
  title: string
  type?: string
}
