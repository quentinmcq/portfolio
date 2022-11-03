import menu from '@/data/en/menu';
import project from '@/data/en/project';
import hobby from '@/data/en/hobby';
import skill from '@/data/en/skill';
import education from '@/data/en/education';
import experience from '@/data/en/experience';

export default {
  common: {
    and: 'et',
    'first-name': 'Quentin',
    name: 'MACQ',
    symfony: 'Symfony',
    vuejs: 'Vue.js'
  },

  menu,

  translations: {
    en: 'English',
    fr: 'French',
    title: 'Translations'
  },

  snackbar: {
    close: 'Close',
    information: 'Link to my first portfolio'
  },

  header: {
    'good-visit': 'Good visit!',
    technologies: 'Symfony/Vue.Js',
    'web-developer': 'Web developer'
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Developed with ❤️ by Quentin MACQ'
  },

  presentation: {
    'main-title': 'Presentation',
    'part-1': "Hi, I'm {name}, {age} years old, and I'm a web developer.",
    'part-2':
      'Passionate about development for several years now, I code mainly in {symfony} and {vuejs}, where I maintain projects in teams.',
    'part-3':
      'Curious by nature, I do technological watch regularly so as not to miss any important news! 💻'
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
    'more-projects': 'See more',
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
    'min-message-length': 'The message must be at least {minLength} characters long',
    name: 'Name',
    'phone-number': 'Phone number',
    'required-field': 'This field is required',
    send: 'Send',
    sent: 'Sent! 😄',
    submit: 'Submit'
  }
};
