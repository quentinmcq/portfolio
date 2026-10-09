import { repoUrl } from '@/data/contacts'

export default {
  common: {
    'aria-nav-mobile': 'Navigation mobile',
    'aria-nav-primary': 'Navigation principale',
    'back-to-top': 'Haut de page',
    'close-menu': 'Fermer le menu',
    firstname: 'Quentin',
    name: 'Macq',
    'open-menu': 'Ouvrir le menu',
    'skip-to-content': 'Aller au contenu'
  },

  contact: {
    channels: 'Autres canaux',
    kicker: "Un projet, une question, ou juste envie de parler front-end autour d'un café.",
    'main-title': 'Contact'
  },

  experience: {
    featured: {
      description:
        'Projets transverses, maintenance et refonte des outils internes, contribution à la stratégie SI.',
      eyebrow: 'Poste actuel',
      'link-label': 'Détails sur LinkedIn',
      period: 'CDI · depuis 2023',
      title: 'Développeur full-stack chez Motoblouz'
    },
    'kind-education': 'Études',
    list: [
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Expert en informatique et SI, bac+5 · EPSI Lille',
        title: 'Développeur web en alternance',
        year: '2021 — 2023'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: "Refonte d'un outil de suivi des impayés",
        title: 'Stage développeur web',
        year: '2021'
      },
      {
        kind: 'education',
        location: 'IUT · Lens',
        title: 'Licence pro DIOC',
        year: '2020 — 2021'
      },
      {
        kind: 'education',
        location: 'IUT · Lens',
        title: 'DUT Informatique',
        year: '2018 — 2020'
      }
    ],
    'main-title': 'Parcours'
  },

  footer: {
    author: 'Quentin Macq',
    host: 'Hébergé par Cloudflare, Inc. · 101 Townsend St, San Francisco, CA 94107, USA'
  },

  header: {
    'aria-hero': 'Introduction',
    'cta-work': 'Voir le travail',
    lede: 'Full-stack avec une obsession pour la performance front et les nouveaux outils.'
  },

  hobby: {
    list: [
      {
        button: 'Voir la collection',
        description: 'Lecteur et collectionneur, suivi sur Mangacollec.',
        detail: '900+ volumes',
        link: 'https://mangacollec.com/user/kakashi/collection',
        title: 'Mangas'
      },
      {
        description: 'Grimpe en salle, en bloc comme en voie.',
        detail: 'Compétitions en club',
        title: 'Escalade'
      },
      {
        description: 'Balades le week-end dès que la météo le permet.',
        detail: 'Kawasaki Z650',
        title: 'Moto'
      }
    ],
    'main-title': 'Hors-écran'
  },

  languages: {
    title: 'Langues'
  },

  menu: [
    {
      link: '#skill',
      title: 'Stack'
    },
    {
      link: '#experience',
      title: 'Parcours'
    },
    {
      link: '#project',
      title: 'Travaux'
    },
    {
      link: '#hobby',
      title: 'Hors-écran'
    },
    {
      link: '#contact',
      title: 'Contact'
    }
  ],

  presence: {
    label: 'en ligne'
  },

  project: {
    'case-link-code': 'Voir le code',
    'case-link-site': 'Voir le site',
    cases: {
      bomberman: {
        facts: [
          { label: 'Équipe', value: '3 personnes' },
          { label: 'Période', value: 'Avril à juin 2019' },
          { label: 'Code', value: '≈ 1 900 lignes · 900 de tests' },
          { label: 'Adversaires', value: "jusqu'à 3 bots" }
        ],
        'figure-alt':
          "Capture d'une partie : bandeau de scores des quatre joueurs, plateau d'herbe, briques et pierres, une explosion et des bombes posées.",
        'figure-meta': 'Version 2026',
        'figure-title': 'Partie en cours',
        lede: 'Un clone de Bomberman en Python, à jouer contre des amis ou des bots.',
        paragraphs: [
          "Projet scolaire à trois en 2019, notre premier vrai programme : plateau, bombes, power-ups, jusqu'à quatre joueurs humains ou bots. Repris en 2026 pour le remettre à niveau, avec de nouveaux sprites et des tests automatiques.",
          "La partie la plus intéressante : les bots. Ils repèrent un bloc destructible à portée, posent une bombe s'ils peuvent se mettre à l'abri, et s'éloignent avant l'explosion."
        ]
      },
      pilpoil: {
        facts: [
          { label: 'Données', value: '437 races référencées' },
          { label: 'IA', value: 'Claude · bilans & symptômes' },
          { label: 'Plateformes', value: 'Web · iOS · Android' }
        ],
        'figure-alt':
          "Page d'accueil de PilPoil sur mobile : « La santé de vos animaux, au poil », avec un bouton de création de compte et trois chiffres clés.",
        'figure-meta': 'En production',
        'figure-title': 'pilpoil.app',
        lede: "Un carnet de santé numérique pour animaux, qui anticipe les risques selon la race et l'âge.",
        paragraphs: [
          "Le carnet de santé d'un animal, c'est souvent une pochette de papiers et des rappels oubliés. PilPoil centralise l'historique et prévient avant les échéances.",
          "Une base de 437 races et leurs prédispositions sert de socle : Claude croise ce profil avec l'historique pour produire des bilans et analyser un symptôme, pour les abonnés."
        ]
      },
      portfolio: {
        facts: [
          { label: 'Langues', value: 'Français · anglais' },
          { label: 'Accessibilité', value: 'Normes WCAG 2.2 AA' },
          { label: 'Poids', value: 'Moins de 70 Ko de JavaScript' },
          { label: 'Code', value: 'Open source' }
        ],
        'figure-alt':
          "Accueil du site en thème sombre : « Quentin Macq. » en grand sur un fond de caractères ASCII, l'accroche et les boutons « Voir le travail » et « Contact ».",
        'figure-meta': 'En ligne',
        'figure-title': 'quentin-macq.dev',
        lede: 'Le site que vous lisez, conçu et codé de A à Z.',
        paragraphs: [
          "Les pages sont générées à l'avance et s'affichent tout de suite, en français comme en anglais. Chaque mise à jour passe des tests automatiques d'accessibilité, de poids et de navigation.",
          "Sur ordinateur, un compteur en bas de l'écran indique combien de personnes visitent le site en ce moment."
        ]
      },
      'wizard-tomb': {
        facts: [
          { label: 'Plateforme', value: 'iOS 26 · SwiftUI' },
          { label: 'Écriture', value: 'Ink, séparée du code' },
          { label: 'Histoire', value: 'Originale, écrite pour le jeu' },
          { label: 'Fins', value: 'Multiples' }
        ],
        'figure-alt':
          "Écran de l'app : bandeau de statistiques (Habileté, Endurance, Chance, or), texte du premier passage dans le village de Roncebrune et trois choix en bas.",
        'figure-meta': 'Premier passage',
        'figure-title': 'Le Tombeau du Sorcier',
        lede: 'Un livre dont vous êtes le héros, natif iOS, avec de vraies règles de jeu.',
        paragraphs: [
          'Le point de départ, ce sont les Défis Fantastiques de mon enfance : combats aux dés, jets de Chance, inventaire et fins multiples, à retrouver sur téléphone.',
          "L'histoire est écrite à part, dans un format fait pour les récits à embranchements : je peux réécrire un passage sans toucher aux règles du jeu."
        ]
      }
    },
    'kind-personal': 'Perso',
    'kind-school': 'Études',
    'kind-work': 'Pro',
    list: [
      {
        chips: ['Vue', 'TypeScript', 'Bun', 'Cloudflare'],
        kind: 'personal',
        link: repoUrl('portfolio'),
        slug: 'portfolio',
        title: 'Portfolio',
        year: '2026'
      },
      {
        chips: ['Swift'],
        kind: 'personal',
        link: repoUrl('wizard-tomb'),
        slug: 'wizard-tomb',
        status: 'wip',
        title: 'Wizard Tomb',
        year: '2026'
      },
      {
        chips: [
          'Nuxt',
          'TypeScript',
          'Tailwind',
          'Supabase',
          'Stripe',
          'Claude',
          'Resend',
          'Vercel'
        ],
        kind: 'personal',
        link: repoUrl('pilpoil'),
        slug: 'pilpoil',
        status: 'wip',
        title: 'Pilpoil',
        year: '2026'
      },
      {
        chips: ['Python', 'PyQt'],
        kind: 'school',
        link: repoUrl('bomberman'),
        slug: 'bomberman',
        title: 'Bomberman',
        year: '2019'
      }
    ],
    'main-title': 'Travaux',
    'status-wip': 'En cours'
  },

  skill: {
    list: [
      {
        content: ['Nuxt', 'Vue', 'TypeScript'],
        label: 'Front'
      },
      {
        content: ['Symfony', 'MySQL', 'RabbitMQ'],
        label: 'Back'
      },
      {
        content: ['Vitest', 'Playwright', 'Oxlint'],
        label: 'Qualité'
      },
      {
        content: ['Bun', 'Docker', 'Cloudflare', 'Claude'],
        label: 'Outillage'
      }
    ],
    'main-title': 'Stack'
  },

  theme: {
    'to-dark': 'Passer au thème sombre',
    'to-light': 'Passer au thème clair'
  }
}
