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
    'rotate-device': 'Please rotate your device',
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
      'stack-label': 'Day-to-day',
      title: 'Full-stack developer at Motoblouz'
    },
    'kind-education': 'Education',
    list: [
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Permanent · cross-team projects, internal tooling, IS strategy.',
        title: 'Full-stack developer',
        year: '2023 →'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Apprenticeship · high-impact e-commerce features.',
        title: 'Web developer',
        year: '2021 — 2023'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Internship · rebuilt an unpaid-invoices tracking tool.',
        title: 'Web developer',
        year: '2021'
      },
      {
        kind: 'education',
        location: 'EPSI · Lille',
        title: 'Master in Computer Science & Information Systems',
        year: '2021 — 2023'
      },
      {
        kind: 'education',
        location: 'IUT — Hauts-de-France',
        title: 'Higher education in computer science',
        year: '2018 — 2021'
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
        description: 'A friend introduced me to manga, and it quickly grew into a real passion.',
        link: 'https://mangacollec.com/user/kakashi/collection',
        title: 'Manga'
      },
      {
        button: 'See the club',
        description:
          'Started climbing during my studies and got back into it over the last few years, with a handful of competitions under my belt.',
        title: 'Climbing'
      },
      {
        description: 'Weekend rides on my Z650, whenever the weather allows.',
        title: 'Motorbike'
      }
    ],
    'main-title': 'Off-screen'
  },

  languages: {
    en: 'English',
    fr: 'French',
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
    'kind-personal': 'Personal',
    'kind-private': 'Private',
    'kind-school': 'School',
    list: [
      {
        chips: ['Vue', 'TypeScript', 'Bun', 'Cloudflare', 'Resend'],
        kind: 'personal',
        link: repoUrl('portfolio'),
        subtitle: '2026 rebuild of my professional portfolio.',
        title: 'Portfolio',
        year: '2026 →'
      },
      {
        chips: ['Swift'],
        kind: 'personal',
        link: repoUrl('wizard-tomb'),
        subtitle:
          'iOS adaptation of a choose-your-own-adventure gamebook, inspired by the "Fighting Fantasy" series.',
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
        subtitle: 'AI-augmented digital health record for pets.',
        title: 'Pilpoil',
        year: '2026'
      },
      {
        chips: ['Symfony', 'Vue', 'PHP', 'Docker', 'API'],
        kind: 'private',
        subtitle: 'Internal unpaid-invoices tracking tool.',
        title: 'Unpaid Tracking',
        year: '2021'
      },
      {
        chips: ['Laravel', 'Angular', 'Phaser', 'PHP'],
        kind: 'school',
        link: repoUrl('slay-the-demons'),
        subtitle: 'Video game embedded in a web page.',
        title: 'Slay the Demons',
        year: '2020'
      },
      {
        chips: ['Python', 'PyQt'],
        kind: 'school',
        link: repoUrl('bomberman'),
        subtitle: 'Bomberman clone with graphical interface.',
        title: 'Bomberman',
        year: '2019'
      }
    ],
    'main-title': 'Work'
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
        content: ['ESLint', 'Oxlint', 'Vitest', 'Playwright', 'Bun'],
        label: 'Tests & tooling'
      },
      {
        content: ['MySQL', 'RabbitMQ', 'Docker', 'GitLab', 'Jenkins', 'Grafana'],
        label: 'Infra & data'
      }
    ],
    'main-title': 'Stack'
  },

  theme: {
    toggle: 'Toggle theme'
  }
}
