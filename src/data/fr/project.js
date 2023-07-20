import { GITHUB_USERNAME, GITHUB_URL } from '@/misc/constants';

export default [
  {
    title: 'Unpaid Tracking',
    subtitle: 'Outil de suivi des impayés',
    description:
      'Permet de lister les impayés, où des mensualités n’ont pas été réglées. Un processus de relance est alors entamé : SMS/mail de relance, mise en demeure puis recouvrement.',
    cover: 'unpaid.webp',
    year: '2021',
    chips: ['Symfony', 'VueJS', 'PHP', 'JS', 'Vuetify', 'Docker', 'API'],
    link: ''
  },
  {
    title: 'Couteau Suisse',
    subtitle: 'Site pour les étudiants handicapés',
    description:
      "L'utilisateur peut créer un compte et choisir son type de handicap (daltonisme, malvoyance, etc). Il a également des outils à sa disposition permettant de l'aider au quotidien comme un assistant vocal.",
    cover: 'couteau-suisse.webp',
    year: '2020',
    chips: ['Laravel', 'PHP', 'JS', 'Livewire', 'Bootstrap'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/teach-me`
  },
  {
    title: 'TeachMe',
    subtitle: 'Site de cours en ligne',
    description:
      "L'utilisateur peut créer un compte, modifier ses informations personnelles et parcourir les cours proposés sur le site. Un système de rôles permet également de gérer leurs accès (admin, professeur, etc).",
    cover: 'teachme.webp',
    year: '2020',
    chips: ['Laravel', 'PHP', 'JS', 'InertiaJS', 'Bootstrap'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/swiss-knife`
  },
  {
    title: 'Interface EDT',
    subtitle: 'Emploi du temps universitaire',
    description:
      "L'utilisateur peut visualiser l'emploi du temps des étudiants de l'IUT sur plusieurs semaines. Il a également la possibilité de voir les disponibilités d'un professeur avec un groupe et d'ajouter des cours en conséquence.",
    cover: 'edt.webp',
    year: '2020',
    chips: ['VueJS', 'JS', 'Bootstrap'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-schedule`
  },
  {
    title: 'Slay the Demons',
    subtitle: 'Jeu vidéo intégré à une page web',
    description:
      'Dans un thème fantastique, le joueur doit affronter des démons afin de passer au niveau suivant et ainsi sauver son village. Il peut également créer un compte afin de regarder le classement de chaque les joueurs.',
    cover: 'slay-the-demon.webp',
    year: '2020',
    chips: ['Laravel', 'Angular', 'PHP', 'JS', 'Phaser', 'Bootstrap'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/slay-the-demons`
  },
  {
    title: 'TV Inside',
    subtitle: 'Plateforme de suivi de séries',
    description:
      "L'utilisateur peut créer un compte et parcourir le catalogue de séries proposé. Il a la possibilité d'attribuer une note aux épisodes, de rédiger des commentaires ou encore d'ajouter une série dans sa 'watchlist'.",
    cover: 'tv-time.webp',
    year: '2019',
    chips: ['Laravel', 'PHP', 'Bootstrap'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/tv-inside`
  },
  {
    title: 'Bomberman',
    subtitle: 'Jeu vidéo avec interface graphique',
    description:
      'Les joueurs doivent éliminer les adversaires avec des bombes. Des power-ups sont dispersés sur toute la carte dans des blocs. Attention, ces bonus peuvent aussi bien être des atouts que des pénalités !',
    cover: 'bomberman.webp',
    year: '2019',
    chips: ['Python', 'PyQt'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/bomberman`
  },
  {
    title: "Site web de l'IUT",
    subtitle: "Refonte du site web de l'IUT",
    description:
      "Projet de création d'un nouveau site pour mon université. Le but était de réaliser une interface moderne et plus élégante que le site de l'époque.",
    cover: 'site.webp',
    year: '2018',
    chips: ['JS', 'HTML'],
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-website`
  }
];
