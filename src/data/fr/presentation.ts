import {
  GITHUB_USERNAME,
  GITHUB_URL,
  LINKEDIN_URL,
  LINKEDIN_USERNAME
} from '@/misc/constants';

export default [
  {
    label: 'cv',
    link: './pdf/cv.pdf',
    color: '#e52c4d'
  },
  {
    label: 'contact',
    link: '#contact',
    color: '#e52c4d'
  },
  {
    label: 'linkedin',
    link: `${LINKEDIN_URL}/${LINKEDIN_USERNAME}`,
    color: 'blue',
    icon: 'mdi-linkedin'
  },
  {
    label: 'github',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}`,
    color: 'black',
    icon: 'mdi-github'
  }
];
