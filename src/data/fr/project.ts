import { GITHUB_USERNAME, GITHUB_URL } from '@/misc/constants'

export default [
  {
    chips: ['Symfony', 'VueJS', 'PHP', 'JS', 'Vuetify', 'Docker', 'API'],
    cover: 'unpaid.webp',
    description:
      'Permet de lister les impayés, où des mensualités n’ont pas été réglées. Un processus de relance est alors entamé : SMS/mail de relance, mise en demeure puis recouvrement.',
    link: '',
    subtitle: 'Outil de suivi des impayés',
    title: 'Unpaid Tracking',
    year: '2021',
  },
  {
    chips: ['Laravel', 'PHP', 'JS', 'Livewire', 'Bootstrap'],
    cover: 'couteau-suisse.webp',
    description:
      'L\'utilisateur peut créer un compte et choisir son type de handicap (daltonisme, malvoyance, etc). Il a également des outils à sa disposition permettant de l\'aider au quotidien comme un assistant vocal.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/teach-me`,
    subtitle: 'Site pour les étudiants handicapés',
    title: 'Couteau Suisse',
    year: '2020',
  },
  {
    chips: ['Laravel', 'PHP', 'JS', 'InertiaJS', 'Bootstrap'],
    cover: 'teachme.webp',
    description:
      'L\'utilisateur peut créer un compte, modifier ses informations personnelles et parcourir les cours proposés sur le site. Un système de rôles permet également de gérer leurs accès (admin, professeur, etc).',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/swiss-knife`,
    subtitle: 'Site de cours en ligne',
    title: 'TeachMe',
    year: '2020',
  },
  {
    chips: ['VueJS', 'JS', 'Bootstrap'],
    cover: 'edt.webp',
    description:
      'L\'utilisateur peut visualiser l\'emploi du temps des étudiants de l\'IUT sur plusieurs semaines. Il a également la possibilité de voir les disponibilités d\'un professeur avec un groupe et d\'ajouter des cours en conséquence.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-schedule`,
    subtitle: 'Emploi du temps universitaire',
    title: 'Interface EDT',
    year: '2020',
  },
  {
    chips: ['Laravel', 'Angular', 'PHP', 'JS', 'Phaser', 'Bootstrap'],
    cover: 'slay-the-demon.webp',
    description:
      'Dans un thème fantastique, le joueur doit affronter des démons afin de passer au niveau suivant et ainsi sauver son village. Il peut également créer un compte afin de regarder le classement de chaque les joueurs.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/slay-the-demons`,
    subtitle: 'Jeu vidéo intégré à une page web',
    title: 'Slay the Demons',
    year: '2020',
  },
  {
    chips: ['Laravel', 'PHP', 'Bootstrap'],
    cover: 'tv-time.webp',
    description:
      'L\'utilisateur peut créer un compte et parcourir le catalogue de séries proposé. Il a la possibilité d\'attribuer une note aux épisodes, de rédiger des commentaires ou encore d\'ajouter une série dans sa \'watchlist\'.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/tv-inside`,
    subtitle: 'Plateforme de suivi de séries',
    title: 'TV Inside',
    year: '2019',
  },
  {
    chips: ['Python', 'PyQt'],
    cover: 'bomberman.webp',
    description:
      'Les joueurs doivent éliminer les adversaires avec des bombes. Des power-ups sont dispersés sur toute la carte dans des blocs. Attention, ces bonus peuvent aussi bien être des atouts que des pénalités !',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/bomberman`,
    subtitle: 'Jeu vidéo avec interface graphique',
    title: 'Bomberman',
    year: '2019',
  },
  {
    chips: ['JS', 'HTML'],
    cover: 'site.webp',
    description:
      'Projet de création d\'un nouveau site pour mon université. Le but était de réaliser une interface moderne et plus élégante que le site de l\'époque.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-website`,
    subtitle: 'Refonte du site web de l\'IUT',
    title: 'Site web de l\'IUT',
    year: '2018',
  },
]
