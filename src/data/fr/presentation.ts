import {
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
} from '@/misc/constants'

export default [
  {
    color: '#e52c4d',
    label: 'cv',
    link: './pdf/cv.pdf',
  },
  {
    color: '#e52c4d',
    label: 'contact',
    link: '#contact',
  },
  {
    color: 'blue',
    icon: 'mdi-linkedin',
    label: 'linkedin',
    link: `${LINKEDIN_URL}/${LINKEDIN_USERNAME}`,
  },
  {
    color: 'black',
    icon: 'mdi-github',
    label: 'github',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}`,
  },
]
