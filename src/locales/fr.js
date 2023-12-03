import menu from '@/data/fr/menu';
import project from '@/data/fr/project';
import skill from '@/data/fr/skill';
import hobby from '@/data/fr/hobby';
import education from '@/data/fr/education';
import experience from '@/data/fr/experience';

export default {
  common: {
    and: 'et',
    firstname: 'Quentin',
    name: 'MACQ',
    symfony: 'Symfony',
    vuejs: 'Vue.js',
    'see-more': 'Voir plus'
  },

  menu,

  languages: {
    en: 'Anglais',
    fr: 'Français',
    title: 'Langues'
  },

  header: {
    visit: 'Bonne visite !',
    technologies: 'Symfony/Vue.Js',
    developer: 'Développeur Web'
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Developed with ❤️ by Quentin MACQ'
  },

  presentation: {
    'main-title': 'Présentation',
    'part-1': "Salut, moi c'est {name} et j'ai {age} ans.",
    'part-2':
      'Développeur web passionné, mes technologies de prédilection sont {symfony} et {vuejs}.',
    'part-3':
      "Curieux de nature, j'essaie de rester à jour avec les dernières nouveautés en effectuant une veille régulière 💻"
  },

  skill: {
    'main-title': 'Compétences',
    ...skill
  },

  education: {
    'main-title': 'Parcours universitaire',
    ...education
  },

  experience: {
    'main-title': 'Parcours professionnel',
    ...experience
  },

  project: {
    'main-title': 'Projets',
    'find-out-more': 'En savoir plus',
    'private-project': 'Projet privé',
    ...project
  },

  hobby: {
    'main-title': 'Loisirs',
    ...hobby
  },

  contact: {
    'main-title': 'Contact',
    erase: 'Effacer',
    error: 'Erreur... 😰',
    'invalid-address-format': "Le format de l'adresse est invalide",
    'invalid-phone-number': 'Le numéro est invalide',
    'mail-address': 'Adresse mail',
    message: 'Message',
    'min-message-length':
      'Le message doit comporter {minLength} caractères minimum',
    name: 'Nom',
    'phone-number': 'Numéro de téléphone',
    'required-field': 'Ce champ est requis',
    send: 'Envoyer',
    sent: 'Envoyé ! 😄'
  }
};
