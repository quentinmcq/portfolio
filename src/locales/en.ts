import experience from '@/data/en/experience'
import hobby from '@/data/en/hobby'
import menu from '@/data/en/menu'
import project from '@/data/en/project'
import skill from '@/data/en/skill'

export default {
  common: {
    'and': 'et',
    'firstname': 'Quentin',
    'name': 'MACQ',
    'nuxt': 'Nuxt',
    'rotate-device': 'Please rotate device',
    'see-more': 'See more',
    'symfony': 'Symfony',
  },

  contact: {
    'erase': 'Erase',
    'error': 'Error... 😰',
    'invalid-address-format': 'The address format is invalid',
    'invalid-phone-number': 'Le phone number is invalid',
    'mail-address': 'Mail address',
    'main-title': 'Contact',
    'message': 'Message',
    'min-message-length':
      'The message must be at least {minLength} characters long',
    'name': 'Name',
    'phone-number': 'Phone number',
    'required-field': 'This field is required',
    'send': 'Send',
    'sent': 'Sent! 😄',
  },

  experience: {
    'list': experience,
    'main-title': 'Professional background',
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Made with ❤️ in France',
    tools: 'using Vue, Vuetify and TypeScript.',
  },

  header: {
    developer: 'Full-Stack Developer',
    visit: 'Good visit!',
  },

  hobby: {
    'list': hobby,
    'main-title': 'Hobbies',
  },

  languages: {
    en: 'English',
    fr: 'French',
    title: 'Languages',
  },

  menu,

  presentation: {
    'main-title': 'Presentation',
    'part-1': 'Hi, I\'m {name}, I\'m {age} years old.',
    'part-2':
      'I\'m a full stack developer and I work daily with {symfony} and {nuxt}.',
    'part-3':
      'Passionate about the web for several years, I love discovering new technologies and sharing what I learn 🚀',
  },

  project: {
    'find-out-more': 'Find out more',
    'list': project,
    'main-title': 'Projects',
    'private-project': 'Private project',
  },

  skill: {
    'list': skill,
    'main-title': 'Skills',
  },
}
