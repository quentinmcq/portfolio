import { repoUrl } from '@/data/contacts'

export default {
  common: {
    'aria-nav-mobile': 'Mobile navigation',
    'aria-nav-primary': 'Primary navigation',
    'back-to-top': 'Back to top',
    'close-menu': 'Close menu',
    firstname: 'Quentin',
    name: 'Macq',
    'name-upper': 'MACQ',
    'open-menu': 'Open menu',
    'skip-to-content': 'Skip to content'
  },

  contact: {
    channels: 'Other channels',
    kicker:
      "An opportunity, a project, or just wanting to talk front-end and coffee — I'm listening.",
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
        subtitle: "Master's degree in computer science · EPSI Lille",
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
        title: "Professional bachelor's degree in computer science",
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
    'meta-location': 'Hauts-de-France',
    role: 'Full-stack developer'
  },

  hobby: {
    list: [
      {
        button: 'See the collection',
        description: 'Reader and collector, tracked on Mangacollec.',
        detail: '933 volumes',
        link: 'https://mangacollec.com/user/kakashi/collection',
        title: 'Manga'
      },
      {
        description: 'Indoor climbing, bouldering and lead.',
        detail: '7 competitions',
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
          { label: 'Code', value: '≈ 2,460 lines' },
          { label: 'Opponents', value: 'up to 3 bots' }
        ],
        'figure-alt':
          'Screenshot of the board mid-game: stone walls, destructible bricks, two placed bombs and four coloured tokens in place of the characters.',
        'figure-meta': 'Screenshot · characters replaced by tokens',
        'figure-title': 'Game in progress',
        lede: 'A Bomberman clone in Python, to play against friends or bots.',
        paragraphs: [
          'A three-person school project from April to June 2019 — our first real program. Board, bombs, power-ups and penalties hidden in blocks, up to four human or bot players, all drawn with PyQt.',
          'The most interesting part: the bots. They spot a destructible block within reach, drop a bomb if they can get to safety, and move away before it goes off.'
        ]
      },
      pilpoil: {
        facts: [
          { label: 'Data', value: '437 breeds referenced' },
          { label: 'AI', value: 'Claude · check-ups & symptoms' },
          { label: 'Mobile', value: 'Capacitor · iOS & Android' },
          { label: 'Version', value: 'v1.2' }
        ],
        'figure-alt':
          'PilPoil home page on mobile: "La santé de vos animaux, au poil", with a sign-up button and three key figures.',
        'figure-meta': 'In production',
        'figure-title': 'pilpoil.app',
        lede: 'A digital health record for pets that anticipates risks by breed and age.',
        paragraphs: [
          "A pet's health record is usually a folder of paper and reminders you forget. PilPoil centralises the medical history, warns before deadlines and shares the file with the family or the vet.",
          'The core: a database of 437 breeds with their predispositions and a recommended follow-up schedule. Claude crosses that profile with the history to produce check-ups and analyse a symptom described by the owner, for subscribers only.'
        ]
      },
      portfolio: {
        facts: [
          { label: 'Hosting', value: 'Cloudflare' },
          { label: 'History', value: '78 commits' }
        ],
        'figure-meta': 'Live visitor counter',
        'figure-title': 'worker/presence.ts',
        lede: 'The site you are reading: a prerendered Vue SPA, hosted on Cloudflare, with no component library.',
        paragraphs: [
          'The goal: a site that loads instantly and depends on no component library.',
          'The HTML is prerendered at build time from the SSR bundle: the page is complete without JavaScript, then Vue hydrates for transitions.',
          'The live visitor counter is a Cloudflare Durable Object: each visitor opens a WebSocket, the object keeps the connections in hibernation and broadcasts the number of connected people on every arrival or departure.'
        ]
      },
      'wizard-tomb': {
        facts: [
          { label: 'Platform', value: 'iOS 26 · SwiftUI' },
          { label: 'Narrative engine', value: 'Ink via InkSwift' },
          { label: 'Story', value: 'Original, written for the game' },
          { label: 'Length', value: '1,790 lines · 164 passages' }
        ],
        'figure-alt':
          'App screen: stats bar (Skill, Stamina, Luck, gold), text of the opening passage in the village of Roncebrune and three choices at the bottom.',
        'figure-meta': 'Opening passage',
        'figure-title': 'Le Tombeau du Sorcier',
        lede: 'A choose-your-own-adventure gamebook, native on iOS, with real game rules.',
        paragraphs: [
          'It started with the Fighting Fantasy books of my childhood: 2d6 + Skill combat, Luck rolls, an inventory and multiple endings. I wanted that on a phone.',
          'The adventure is written in Ink, not Swift. Combat, inventory and effects do not live in the prose: they are tags the SwiftUI engine intercepts while reading. Writing and mechanics no longer step on each other.'
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
        chips: ['Symfony', 'Vue', 'PHP', 'Docker'],
        kind: 'work',
        subtitle: "Rebuild of Motoblouz's internal unpaid-invoices tracking tool.",
        title: 'Unpaid Tracking',
        year: '2021'
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
    'aria-tools': 'Tools',
    list: [
      {
        content: ['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Symfony', 'Claude'],
        label: 'Day-to-day',
        primary: true
      },
      {
        content: ['Oxlint', 'Vitest', 'Playwright', 'Bun'],
        label: 'Tests & tooling'
      },
      {
        content: ['MySQL', 'RabbitMQ', 'Docker', 'Grafana'],
        label: 'Infra & data'
      }
    ],
    'main-title': 'Stack'
  },

  theme: {
    'to-dark': 'Switch to dark theme',
    'to-light': 'Switch to light theme'
  }
}
