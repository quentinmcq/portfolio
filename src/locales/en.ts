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
    'rotate-device': 'Please rotate device',
    'see-more': 'See more',
    'symfony': 'Symfony',
    'vuejs': 'Vue.js',
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
    'main-title': 'Professional background',
    ...experience,
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Made with ❤️ in France',
    // recaptcha: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.',
    tools: 'using Vue, Vuetify and TypeScript.',
  },

  header: {
    developer: 'Full-Stack Developer',
    visit: 'Good visit!',
  },

  hobby: {
    'main-title': 'Hobbies',
    ...hobby,
  },

  languages: {
    en: 'English',
    fr: 'French',
    title: 'Languages',
  },

  menu,

  presentation: {
    'main-title': 'Presentation',
    'part-1': 'Hi, I\'m {name} and I\'m {age} years old.',
    'part-2':
      'Passionate web developer for several years now, I use the {symfony} and {vuejs} frameworks on a daily basis.',
    'part-3':
      'Curious by nature, I love doing technological watch and sharing my knowledge with others 🎉',
  },

  project: {
    'find-out-more': 'Find out more',
    'main-title': 'Projects',
    'private-project': 'Private project',
    ...project,
  },

  skill: {
    'main-title': 'Skills',
    ...skill,
  },
}
