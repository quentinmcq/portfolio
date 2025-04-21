import experience from '@/data/fr/experience.ts'
import hobby from '@/data/fr/hobby'
import menu from '@/data/fr/menu'
import project from '@/data/fr/project'
import skill from '@/data/fr/skill'

export default {
  common: {
    'and': 'et',
    'firstname': 'Quentin',
    'name': 'MACQ',
    'rotate-device': 'Veuillez faire pivoter l\'appareil',
    'see-more': 'Voir plus',
    'symfony': 'Symfony',
    'vuejs': 'Vue.js',
  },

  contact: {
    'erase': 'Effacer',
    'error': 'Erreur... 😰',
    'invalid-address-format': 'Le format de l\'adresse est invalide',
    'invalid-phone-number': 'Le numéro est invalide',
    'mail-address': 'Adresse mail',
    'main-title': 'Contact',
    'message': 'Message',
    'min-message-length': 'Le message doit comporter {minLength} caractères minimum',
    'name': 'Nom',
    'phone-number': 'Numéro de téléphone',
    'required-field': 'Ce champ est requis',
    'send': 'Envoyer',
    'sent': 'Envoyé ! 😄',
  },

  experience: {
    'list': experience,
    'main-title': 'Parcours professionnel',
  },

  footer: {
    copyright: '© Copyright - {currentYear}',
    credit: 'Made with ❤️ in France',
    tools: 'using Vue, Vuetify and TypeScript.',
  },

  header: {
    developer: 'Développeur Full-Stack',
    visit: 'Bonne visite !',
  },

  hobby: {
    'list': hobby,
    'main-title': 'Loisirs',
  },

  languages: {
    en: 'Anglais',
    fr: 'Français',
    title: 'Langues',
  },

  menu,

  presentation: {
    'main-title': 'Présentation',
    'part-1': 'Salut, moi c\'est {name}, j\'ai {age} ans.',
    'part-2': 'Je suis développeur web et je travaille au quotidien avec {symfony} et {vuejs}.',
    'part-3': 'Passionné par le web depuis plusieurs années, j\'adore découvrir de nouvelles technos et partager ce que j\'apprends 🚀',
  },

  project: {
    'find-out-more': 'En savoir plus',
    'list': project,
    'main-title': 'Projets',
    'private-project': 'Projet privé',
  },

  skill: {
    'list': skill,
    'main-title': 'Compétences',
  },
}
