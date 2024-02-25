import menu from '@/data/en/menu';
import project from '@/data/en/project';
import skill from '@/data/en/skill';
import hobby from '@/data/en/hobby';
import education from '@/data/en/education';
import experience from '@/data/en/experience';

export default {
  common: {
    and: 'et',
    firstname: 'Quentin',
    name: 'MACQ',
    symfony: 'Symfony',
    vuejs: 'Vue.js',
    'see-more': 'See more'
  },

  menu,

  languages: {
    en: 'English',
    fr: 'French',
    title: 'Languages'
  },

  header: {
    visit: 'Good visit!',
    developer: 'Full-Stack Developer'
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Made with ❤️ by Quentin MACQ'
  },

  presentation: {
    'main-title': 'Presentation',
    'part-1': "Hi, I'm {name} and I'm {age} years old.",
    'part-2':
      'Passionate web developer for several years now, I use the {symfony} and {vuejs} frameworks on a daily basis.',
    'part-3':
      'Curious by nature, I love doing technological watch and sharing my knowledge with others 🎉'
  },

  skill: {
    'main-title': 'Skills',
    ...skill
  },

  education: {
    'main-title': 'Academic background',
    ...education
  },

  experience: {
    'main-title': 'Professional background',
    ...experience
  },

  project: {
    'main-title': 'Projects',
    'find-out-more': 'Find out more',
    'private-project': 'Private project',
    ...project
  },

  hobby: {
    'main-title': 'Hobbies',
    ...hobby
  },

  contact: {
    erase: 'Erase',
    error: 'Error... 😰',
    'invalid-address-format': 'The address format is invalid',
    'invalid-phone-number': 'Le phone number is invalid',
    'mail-address': 'Mail address',
    'main-title': 'Contact',
    message: 'Message',
    'min-message-length':
      'The message must be at least {minLength} characters long',
    name: 'Name',
    'phone-number': 'Phone number',
    'required-field': 'This field is required',
    send: 'Send',
    sent: 'Sent! 😄'
  }
};
