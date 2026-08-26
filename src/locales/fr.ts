import { repoUrl } from '@/data/contacts'

export default {
  common: {
    'aria-nav-mobile': 'Navigation mobile',
    'aria-nav-primary': 'Navigation principale',
    'back-to-top': 'Haut de page',
    'close-menu': 'Fermer le menu',
    firstname: 'Quentin',
    name: 'Macq',
    'name-upper': 'MACQ',
    'open-menu': 'Ouvrir le menu',
    'rotate-device': "Veuillez faire pivoter l'appareil",
    'skip-to-content': 'Aller au contenu'
  },

  contact: {
    channels: 'Autres canaux',
    kicker:
      "Une opportunité, un projet, ou juste envie de discuter front-end et café — je suis à l'écoute.",
    'main-title': 'Contact',
    where: 'Où'
  },

  experience: {
    featured: {
      description:
        'Projets transverses, maintenance et refonte des outils internes, contribution à la stratégie SI.',
      eyebrow: 'Poste actuel',
      'link-label': 'Détails sur LinkedIn',
      period: 'CDI · depuis 2023',
      'stack-label': 'Au quotidien',
      title: 'Développeur full-stack chez Motoblouz'
    },
    'kind-education': 'Études',
    list: [
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'CDI · projets transverses, outils internes, stratégie SI.',
        title: 'Développeur full-stack',
        year: '2023 →'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Alternance · projets impactants côté e-commerce.',
        title: 'Développeur web',
        year: '2021 — 2023'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: "Stage · refonte d'un outil de suivi des impayés.",
        title: 'Développeur web',
        year: '2021'
      },
      {
        kind: 'education',
        location: 'EPSI · Lille',
        title: "Master Expert en Informatique et Systèmes d'Information",
        year: '2021 — 2023'
      },
      {
        kind: 'education',
        location: 'IUT — Hauts-de-France',
        title: 'Formation supérieure en informatique',
        year: '2018 — 2021'
      }
    ],
    'main-title': 'Parcours'
  },

  footer: {
    copyright: '© {currentYear} — Quentin Macq',
    source: 'Code source'
  },

  header: {
    'aria-hero': 'Introduction',
    'cta-work': 'Voir le travail',
    lede: 'Full-stack avec une obsession pour la performance front et les nouveaux outils.',
    'meta-location': 'Hauts-de-France',
    role: 'Développeur full-stack'
  },

  hobby: {
    list: [
      {
        button: 'Voir la collection',
        description:
          'Découvert grâce à un ami, les mangas sont rapidement devenus une véritable passion pour moi.',
        link: 'http://mangacollec.com/user/kakashi/collection',
        title: 'Manga'
      },
      {
        button: 'Voir le club',
        description:
          "Commencée pendant mes études, l'escalade est une activité que j'ai reprise ces dernières années, avec quelques compétitions à mon actif.",
        title: 'Escalade'
      },
      {
        description: 'Balades le week-end au guidon de ma Z650 dès que la météo le permet.',
        title: 'Moto'
      }
    ],
    'main-title': 'Hors-écran'
  },

  languages: {
    en: 'Anglais',
    fr: 'Français',
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
    'kind-personal': 'Perso',
    'kind-private': 'Privé',
    'kind-school': 'École',
    list: [
      {
        chips: ['Vue', 'TypeScript', 'Bun', 'Cloudflare'],
        kind: 'personal',
        link: repoUrl('portfolio'),
        subtitle: 'Refonte 2026 de mon portfolio professionnel.',
        title: 'Portfolio',
        year: '2026 →'
      },
      {
        chips: ['Swift'],
        kind: 'personal',
        link: repoUrl('wizard-tomb'),
        subtitle:
          "Adaptation iOS d'un livre dont on est le héros, dans la veine des « défis fantastiques ».",
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
        subtitle: 'Carnet de santé numérique pour animaux de compagnie, augmenté par IA.',
        title: 'Pilpoil',
        year: '2026'
      },
      {
        chips: ['Symfony', 'Vue', 'PHP', 'Docker', 'API'],
        kind: 'private',
        subtitle: 'Outil interne de suivi des impayés.',
        title: 'Unpaid Tracking',
        year: '2021'
      },
      {
        chips: ['Laravel', 'Angular', 'Phaser', 'PHP'],
        kind: 'school',
        link: repoUrl('slay-the-demons'),
        subtitle: 'Jeu vidéo intégré à une page web.',
        title: 'Slay the Demons',
        year: '2020'
      },
      {
        chips: ['Python', 'PyQt'],
        kind: 'school',
        link: repoUrl('bomberman'),
        subtitle: 'Clone de Bomberman avec interface graphique.',
        title: 'Bomberman',
        year: '2019'
      }
    ],
    'main-title': 'Travaux'
  },

  skill: {
    'aria-tools': 'Outils',
    list: [
      {
        content: ['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Symfony', 'Claude'],
        label: 'Au quotidien',
        primary: true
      },
      {
        content: ['ESLint', 'Oxlint', 'Vitest', 'Playwright', 'Bun'],
        label: 'Tests & outillage'
      },
      {
        content: ['MySQL', 'RabbitMQ', 'Docker', 'GitLab', 'Jenkins', 'Grafana'],
        label: 'Infra & data'
      }
    ],
    'main-title': 'Stack'
  },

  theme: {
    toggle: 'Changer de thème'
  }
}
