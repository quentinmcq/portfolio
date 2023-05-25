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
    technologies: 'Symfony/Vue.Js',
    developer: 'Web developer'
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Developed with ❤️ by Quentin MACQ'
  },

  presentation: {
    'main-title': 'Presentation',
    'part-1': "Hi, I'm {name} and I'm {age} years old.",
    'part-2':
      'Passionate web developer, my favorite technologies are {symfony} and {vuejs}.',
    'part-3':
      'Curious by nature, I try to keep up to date with the latest news by doing technological watch 💻'
  },

  skill: {
    'main-title': 'Skills',
    ...skill
  },

  education: {
    'main-title': 'Education',
    ...education
  },

  experience: {
    'main-title': 'Experiences',
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
