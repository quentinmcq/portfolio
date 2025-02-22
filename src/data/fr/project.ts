import { GITHUB_URL, GITHUB_USERNAME } from '@/misc/constants'

export default [
  {
    chips: ['Symfony', 'VueJS', 'PHP', 'JS', 'Vuetify', 'Docker', 'API'],
    cover: 'unpaid.webp',
    description:
      'L\'application permet de lister les impayés correspondant aux mensualités non réglées. Un processus de relance est alors déclenché, incluant l\'envoi de SMS et d\'e-mails de rappel, suivi d\'une mise en demeure et d\'une procédure de recouvrement.',
    link: '',
    subtitle: 'Outil de suivi des impayés',
    title: 'Unpaid Tracking',
    year: '2021',
  },
  {
    chips: ['Laravel', 'PHP', 'JS', 'Livewire', 'Bootstrap'],
    cover: 'couteau-suisse.webp',
    description:
      'L\'application permet de créer un compte et de sélectionner un type de handicap (daltonisme, malvoyance, etc.). Elle propose également des outils d’assistance, tels qu’un assistant vocal, pour faciliter le quotidien.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/teach-me`,
    subtitle: 'Site pour les étudiants handicapés',
    title: 'Couteau Suisse',
    year: '2020',
  },
  {
    chips: ['Laravel', 'PHP', 'JS', 'InertiaJS', 'Bootstrap'],
    cover: 'teachme.webp',
    description:
      'L\'application permet de créer un compte, de modifier ses informations personnelles et de parcourir les cours disponibles sur le site. Un système de rôles gère les niveaux d\'accès, notamment pour les administrateurs et les professeurs.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/swiss-knife`,
    subtitle: 'Site de cours en ligne',
    title: 'TeachMe',
    year: '2020',
  },
  {
    chips: ['VueJS', 'JS', 'Bootstrap'],
    cover: 'edt.webp',
    description: 'L\'application permet de consulter l\'emploi du temps des étudiants de l\'IUT sur plusieurs semaines. Elle permet également de vérifier les disponibilités d\'un professeur avec un groupe et d\'ajouter des cours en fonction des créneaux libres.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-schedule`,
    subtitle: 'Emploi du temps universitaire',
    title: 'Interface EDT',
    year: '2020',
  },
  {
    chips: ['Laravel', 'Angular', 'PHP', 'JS', 'Phaser', 'Bootstrap'],
    cover: 'slay-the-demon.webp',
    description:
      'Dans un univers fantastique, le joueur affronte des démons pour progresser de niveau et sauver son village. Un système de compte permet également de consulter le classement des autres joueurs.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/slay-the-demons`,
    subtitle: 'Jeu vidéo intégré à une page web',
    title: 'Slay the Demons',
    year: '2020',
  },
  {
    chips: ['Laravel', 'PHP', 'Bootstrap'],
    cover: 'tv-time.webp',
    description:
      'L\'application permet de créer un compte et d\'explorer le catalogue de séries disponible. Il est possible de noter les épisodes, de rédiger des commentaires et d\'ajouter des séries à une watchlist.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/tv-inside`,
    subtitle: 'Plateforme de suivi de séries',
    title: 'TV Inside',
    year: '2019',
  },
  {
    chips: ['Python', 'PyQt'],
    cover: 'bomberman.webp',
    description:
      'Les joueurs doivent éliminer leurs adversaires à l’aide de bombes. Des power-ups, cachés dans les blocs répartis sur la carte, offrent des bonus ou des pénalités, influençant ainsi le cours de la partie.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/bomberman`,
    subtitle: 'Jeu vidéo avec interface graphique',
    title: 'Bomberman',
    year: '2019',
  },
  {
    chips: ['JS', 'HTML'],
    cover: 'site.webp',
    description: 'Projet de refonte du site web de mon université, avec pour objectif de proposer une interface moderne et élégante, en remplacement de l’ancienne version.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-website`,
    subtitle: 'Refonte du site web de l\'IUT',
    title: 'Site web de l\'IUT',
    year: '2018',
  },
]
