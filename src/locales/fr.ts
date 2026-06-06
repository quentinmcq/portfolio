import { CONTACTS, repoUrl } from '@/data/contacts'

const linkedin = CONTACTS.linkedin

export default {
  common: {
    'back-to-top': 'Haut de page',
    'close-menu': 'Fermer le menu',
    firstname: 'Quentin',
    name: 'Macq',
    'name-upper': 'MACQ',
    'open-menu': 'Ouvrir le menu',
    'rotate-device': "Veuillez faire pivoter l'appareil",
    'skip-to-content': 'Aller au contenu',
  },

  contact: {
    channels: 'Autres canaux',
    erase: 'Effacer',
    error: 'Erreur, on réessaie ?',
    index: '05',
    'invalid-address-format': "Le format de l'adresse est invalide",
    kicker: 'On en parle ?',
    lede: "Une opportunité, un projet, ou juste envie de discuter front-end et café — je suis à l'écoute.",
    'mail-address': 'Adresse mail',
    'main-title': 'Contact',
    message: 'Message',
    'min-message-length': 'Le message doit comporter {minLength} caractères minimum',
    name: 'Nom',
    'required-field': 'Ce champ est requis',
    send: 'Envoyer',
    'send-another': 'Envoyer un autre message',
    sending: 'Envoi en cours…',
    sent: 'Envoyé — merci !',
  },

  experience: {
    featured: {
      description:
        'Projets transverses, maintenance et refonte des outils internes, contribution à la stratégie SI.',
      eyebrow: 'Poste actuel',
      'link-label': 'Détails sur LinkedIn',
      period: 'CDI · depuis 2023',
      'stack-label': 'Au quotidien',
      title: 'Développeur full-stack chez Motoblouz',
    },
    index: '02',
    kicker: "Voici où j'en suis — et le chemin pour y arriver.",
    'kind-education': 'Études',
    list: [
      {
        kind: 'work',
        link: linkedin,
        location: 'Motoblouz · Carvin',
        subtitle: 'CDI · projets transverses, outils internes, stratégie SI.',
        title: 'Développeur full-stack',
        year: '2023 →',
      },
      {
        kind: 'work',
        link: linkedin,
        location: 'Motoblouz · Carvin',
        subtitle: 'Alternance · projets impactants côté e-commerce.',
        title: 'Développeur web',
        year: '2021 — 2023',
      },
      {
        kind: 'work',
        link: linkedin,
        location: 'Motoblouz · Carvin',
        subtitle: "Stage · refonte d'un outil de suivi des impayés.",
        title: 'Développeur web',
        year: '2021',
      },
      {
        kind: 'education',
        location: 'EPSI · Lille',
        subtitle: 'Cursus axé gestion de projet et management.',
        title: "Master Expert en Informatique et Systèmes d'Information",
        year: '2021 — 2023',
      },
      {
        kind: 'education',
        location: 'IUT — Hauts-de-France',
        title: 'Formation supérieure en informatique',
        year: '2018 — 2021',
      },
    ],
    'main-title': 'Parcours',
  },

  footer: {
    copyright: '© {currentYear} — Quentin Macq',
    tools: 'Vue · TypeScript · sans framework UI',
  },

  header: {
    available: "À l'écoute",
    'cta-work': 'Voir le travail',
    edition: 'Édition {year}',
    focus: {
      open: 'Discussions, opportunités, ou juste partage de veille.',
      'open-label': 'Disponible pour',
      shipping: 'Front Nuxt, back Symfony et design system entre les deux.',
      'shipping-label': 'En production',
    },
    idx: 'IDX 001',
    lede: 'Full-stack avec une obsession pour la performance front et les nouveaux outils.',
    'meta-location': 'Hauts-de-France',
    role: 'Développeur full-stack',
    scroll: 'Scroller',
  },

  hobby: {
    index: '04',
    kicker: "Ce que je fais quand je ferme l'éditeur.",
    list: [
      {
        button: 'Voir la collection',
        description:
          'Découvert grâce à un ami, les mangas sont rapidement devenus une véritable passion pour moi.',
        link: 'http://mangacollec.com/user/kakashi/collection',
        title: 'Manga',
      },
      {
        button: 'Voir le club',
        description:
          "Commencée pendant mes études, l'escalade est une activité que j'ai reprise ces dernières années, avec quelques compétitions à mon actif.",
        link: 'https://escalade-rouvroy.fr/',
        title: 'Escalade',
      },
      {
        description: 'Balades le week-end au guidon de ma Z650 dès que la météo le permet.',
        title: 'Moto',
      },
    ],
    'main-title': 'Hors-écran',
  },

  languages: {
    en: 'Anglais',
    fr: 'Français',
    title: 'Langues',
  },

  menu: [
    {
      index: '01',
      link: '#skill',
      title: 'Stack',
    },
    {
      index: '02',
      link: '#experience',
      title: 'Parcours',
    },
    {
      index: '03',
      link: '#project',
      title: 'Travaux',
    },
    {
      index: '04',
      link: '#hobby',
      title: 'Hors-écran',
    },
    {
      index: '05',
      link: '#contact',
      title: 'Contact',
    },
  ],

  presence: {
    label: 'en ligne',
  },

  project: {
    index: '03',
    kicker: 'Une sélection — perso, école, et un aperçu pro.',
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
        year: '2026 →',
      },
      {
        chips: ['Swift'],
        kind: 'personal',
        link: repoUrl('wizard-tomb'),
        subtitle:
          "Adaptation iOS d'un livre dont on est le héros, dans la veine des « défis fantastiques ».",
        title: 'Wizard Tomb',
        year: '2026',
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
          'Vercel',
        ],
        kind: 'personal',
        link: repoUrl('pilpoil'),
        subtitle: 'Carnet de santé numérique pour animaux de compagnie, augmenté par IA.',
        title: 'Pilpoil',
        year: '2026',
      },
      {
        chips: ['Symfony', 'Vue', 'PHP', 'Docker', 'API'],
        kind: 'private',
        subtitle: 'Outil interne de suivi des impayés.',
        title: 'Unpaid Tracking',
        year: '2021',
      },
      {
        chips: ['Laravel', 'Angular', 'Phaser', 'PHP'],
        kind: 'school',
        link: repoUrl('slay-the-demons'),
        subtitle: 'Jeu vidéo intégré à une page web.',
        title: 'Slay the Demons',
        year: '2020',
      },
      {
        chips: ['Python', 'PyQt'],
        kind: 'school',
        link: repoUrl('bomberman'),
        subtitle: 'Clone de Bomberman avec interface graphique.',
        title: 'Bomberman',
        year: '2019',
      },
    ],
    'main-title': 'Travaux',
  },

  skill: {
    index: '01',
    kicker: 'Quatre piles complémentaires, du build aux tests.',
    list: [
      {
        content: ['Symfony', 'Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Claude'],
        label: 'Au quotidien',
        primary: true,
      },
      {
        content: ['ESLint', 'Oxlint', 'Vitest', 'Playwright'],
        label: 'Tests & qualité',
      },
      {
        content: ['MySQL', 'RabbitMQ', 'Docker', 'GitLab', 'Jenkins', 'Grafana'],
        label: 'Infra & data',
      },
      {
        content: ['Bun', 'Swift'],
        label: 'Outils & explorations',
      },
    ],
    'main-title': 'Stack',
  },

  theme: {
    toggle: 'Changer de thème',
  },
}
