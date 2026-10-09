import { repoUrl } from '@/data/contacts'

export default {
  common: {
    'aria-nav-mobile': 'Mobile navigation',
    'aria-nav-primary': 'Primary navigation',
    'back-to-top': 'Back to top',
    'close-menu': 'Close menu',
    firstname: 'Quentin',
    name: 'Macq',
    'open-menu': 'Open menu',
    'skip-to-content': 'Skip to content'
  },

  contact: {
    channels: 'Other channels',
    kicker: 'A project, a question, or just wanting to talk front-end over coffee.',
    'main-title': 'Contact',
    where: 'Where'
  },

  experience: {
    featured: {
      description:
        'Cross-team projects, maintaining and refactoring internal tools, contributing to the IS strategy.',
      eyebrow: 'Current role',
      'link-label': 'Details on LinkedIn',
      period: 'Permanent · since 2023',
      title: 'Full-stack developer at Motoblouz'
    },
    'kind-education': 'Education',
    list: [
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: "IT and information systems expert, Master's level · EPSI Lille",
        title: 'Web developer (apprenticeship)',
        year: '2021 — 2023'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Rebuild of an unpaid-invoices tracking tool',
        title: 'Web development internship',
        year: '2021'
      },
      {
        kind: 'education',
        location: 'IUT · Lens',
        title: "Professional bachelor's degree (DIOC)",
        year: '2020 — 2021'
      },
      {
        kind: 'education',
        location: 'IUT · Lens',
        title: 'Two-year technical degree (DUT) in computer science',
        year: '2018 — 2020'
      }
    ],
    'main-title': 'Background'
  },

  footer: {
    copyright: '© {currentYear} — Quentin Macq',
    source: 'Source code'
  },

  header: {
    'aria-hero': 'Introduction',
    'cta-work': 'See the work',
    lede: 'Full-stack with an obsession for front-end performance and emerging tools.',
    'meta-location': 'Hauts-de-France'
  },

  hobby: {
    list: [
      {
        button: 'See the collection',
        description: 'Reader and collector, tracked on Mangacollec.',
        detail: '900+ volumes',
        link: 'https://mangacollec.com/user/kakashi/collection',
        title: 'Manga'
      },
      {
        description: 'Indoor climbing, bouldering and lead.',
        detail: 'Club competitions',
        title: 'Climbing'
      },
      {
        description: 'Weekend rides whenever the weather allows.',
        detail: 'Kawasaki Z650',
        title: 'Motorbike'
      }
    ],
    'main-title': 'Off-screen'
  },

  languages: {
    title: 'Languages'
  },

  menu: [
    {
      link: '#skill',
      title: 'Stack'
    },
    {
      link: '#experience',
      title: 'Background'
    },
    {
      link: '#project',
      title: 'Work'
    },
    {
      link: '#hobby',
      title: 'Off-screen'
    },
    {
      link: '#contact',
      title: 'Contact'
    }
  ],

  presence: {
    label: 'online'
  },

  project: {
    'case-link-code': 'View the code',
    'case-link-site': 'Visit the site',
    cases: {
      bomberman: {
        facts: [
          { label: 'Team', value: '3 people' },
          { label: 'Period', value: 'April to June 2019' },
          { label: 'Code', value: '≈ 1,900 lines · 900 of tests' },
          { label: 'Opponents', value: 'up to 3 bots' }
        ],
        'figure-alt':
          'Screenshot of a game: score bar for the four players, grass board, bricks and stones, one explosion and placed bombs.',
        'figure-meta': '2026 version',
        'figure-title': 'Game in progress',
        lede: 'A Bomberman clone in Python, to play against friends or bots.',
        paragraphs: [
          'A school project for three in 2019, our first real program: board, bombs, power-ups, up to four human or bot players. Reworked in 2026 to bring it up to date, with new sprites and automated tests.',
          'The most interesting part: the bots. They spot a destructible block in range, drop a bomb if they can reach cover, and move away before the blast.'
        ]
      },
      pilpoil: {
        facts: [
          { label: 'Data', value: '437 breeds referenced' },
          { label: 'AI', value: 'Claude · check-ups & symptoms' },
          { label: 'Platforms', value: 'Web · iOS · Android' },
          { label: 'Sharing', value: 'Family · vet' }
        ],
        'figure-alt':
          'PilPoil home page on mobile: "La santé de vos animaux, au poil", with a sign-up button and three key figures.',
        'figure-meta': 'In production',
        'figure-title': 'pilpoil.app',
        lede: 'A digital health record for pets that anticipates risks by breed and age.',
        paragraphs: [
          "A pet's health record is often a folder of papers and forgotten reminders. PilPoil gathers the history, warns before due dates and shares the record with family or the vet.",
          'A base of 437 breeds and their predispositions is the foundation: Claude crosses this profile with the history to produce check-ups and analyse a symptom, for subscribers.'
        ]
      },
      portfolio: {
        facts: [
          { label: 'Languages', value: 'French · English' },
          { label: 'Accessibility', value: 'WCAG 2.2 AA standards' },
          { label: 'Weight', value: 'Under 70 KB of JavaScript' },
          { label: 'Code', value: 'Open source' }
        ],
        'figure-alt':
          'Site homepage in dark theme: “Quentin Macq.” in large type over an ASCII character backdrop, the tagline and the “See the work” and “Contact” buttons.',
        'figure-meta': 'Live',
        'figure-title': 'quentin-macq.dev',
        lede: 'The site you are reading, designed and built from scratch.',
        paragraphs: [
          'Pages are generated ahead of time and show up instantly, in French and in English. Every update goes through automated accessibility, weight and navigation tests.',
          'On desktop, a counter at the bottom of the screen shows how many people are on the site right now.'
        ]
      },
      'wizard-tomb': {
        facts: [
          { label: 'Platform', value: 'iOS 26 · SwiftUI' },
          { label: 'Writing', value: 'Ink, separate from the code' },
          { label: 'Story', value: 'Original, written for the game' },
          { label: 'Endings', value: 'Multiple' }
        ],
        'figure-alt':
          'App screen: stats bar (Skill, Stamina, Luck, gold), text of the opening passage in the village of Roncebrune and three choices at the bottom.',
        'figure-meta': 'Opening passage',
        'figure-title': 'Le Tombeau du Sorcier',
        lede: 'A choose-your-own-adventure gamebook, native on iOS, with real game rules.',
        paragraphs: [
          'It started with the Fighting Fantasy books of my childhood: dice combat, Luck rolls, an inventory and multiple endings, brought to the phone.',
          'The story is written separately, in a format made for branching narratives: I can rewrite a passage without touching the game rules.'
        ]
      }
    },
    'kind-personal': 'Personal',
    'kind-school': 'Studies',
    'kind-work': 'Work',
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
    'main-title': 'Work',
    'status-wip': 'In progress'
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
        label: 'Quality'
      },
      {
        content: ['Bun', 'Docker', 'Cloudflare', 'Claude'],
        label: 'Tooling'
      }
    ],
    'main-title': 'Stack'
  },

  theme: {
    'to-dark': 'Switch to dark theme',
    'to-light': 'Switch to light theme'
  }
}
