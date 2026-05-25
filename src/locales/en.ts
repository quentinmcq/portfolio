import { CONTACTS, repoUrl } from '@/data/contacts'

const linkedin = CONTACTS.linkedin

export default {
  common: {
    'back-to-top': 'Back to top',
    'close-menu': 'Close menu',
    'firstname': 'Quentin',
    'name': 'Macq',
    'name-upper': 'MACQ',
    'open-menu': 'Open menu',
    'rotate-device': 'Please rotate your device',
    'skip-to-content': 'Skip to content',
  },

  contact: {
    'channels': 'Other channels',
    'erase': 'Clear',
    'error': 'Something broke, try again?',
    'index': '05',
    'invalid-address-format': 'Invalid email format',
    'kicker': 'Let\'s talk.',
    'lede': 'An opportunity, a project, or just wanting to talk front-end and coffee — I\'m listening.',
    'mail-address': 'Email address',
    'main-title': 'Contact',
    'message': 'Message',
    'min-message-length': 'The message must be at least {minLength} characters long',
    'name': 'Name',
    'required-field': 'This field is required',
    'send': 'Send',
    'sending': 'Sending…',
    'sent': 'Sent — thank you!',
  },

  experience: {
    'featured': {
      'description': 'Cross-team projects, maintaining and refactoring internal tools, contributing to the IS strategy.',
      'eyebrow': 'Current role',
      'link-label': 'Details on LinkedIn',
      'period': 'Permanent · since 2023',
      'stack-label': 'Day-to-day',
      'title': 'Full-stack developer at Motoblouz',
    },
    'index': '02',
    'kicker': 'Where I am now — and the path that got me there.',
    'kind-education': 'Education',
    'list': [
      {
        kind: 'work',
        link: linkedin,
        location: 'Motoblouz · Carvin',
        subtitle: 'Permanent · cross-team projects, internal tooling, IS strategy.',
        title: 'Full-stack developer',
        year: '2023 →',
      },
      {
        kind: 'work',
        link: linkedin,
        location: 'Motoblouz · Carvin',
        subtitle: 'Apprenticeship · high-impact e-commerce features.',
        title: 'Web developer',
        year: '2021 — 2023',
      },
      {
        kind: 'work',
        link: linkedin,
        location: 'Motoblouz · Carvin',
        subtitle: 'Internship · rebuilt an unpaid-invoices tracking tool.',
        title: 'Web developer',
        year: '2021',
      },
      {
        kind: 'education',
        location: 'EPSI · Lille',
        subtitle: 'Curriculum focused on project management and leadership.',
        title: 'Master in Computer Science & Information Systems',
        year: '2021 — 2023',
      },
      {
        kind: 'education',
        location: 'IUT — Hauts-de-France',
        title: 'Higher education in computer science',
        year: '2018 — 2021',
      },
    ],
    'main-title': 'Background',
  },

  footer: {
    copyright: '© {currentYear} — Quentin Macq',
    credit: 'Built with passion, line by line',
    tools: 'Vue · TypeScript · no UI framework',
  },

  header: {
    'available': 'Always up for a chat',
    'cta-work': 'See the work',
    'edition': 'Edition {year}',
    'focus': {
      'exploring': 'Native iOS in Swift, and modern stacks.',
      'exploring-label': 'Exploring',
      'open': 'Conversations, opportunities, or simply sharing what I read.',
      'open-label': 'Open to',
      'shipping': 'Internal tooling and e-commerce features at Motoblouz.',
      'shipping-label': 'Now shipping',
    },
    'idx': 'IDX 001',
    'lede': 'Full-stack with an obsession for front-end performance and emerging tools.',
    'meta-location': 'Hauts-de-France',
    'role': 'Full-stack developer',
    'scroll': 'Scroll',
  },

  hobby: {
    'index': '04',
    'kicker': 'What I do when the editor is closed.',
    'list': [
      {
        button: 'See the collection',
        description: 'A friend got me into it — now a real passion.',
        link: 'http://mangacollec.com/user/kakashi/collection',
        title: 'Manga',
      },
      {
        button: 'See the club',
        description: 'Discovered during my studies, back at it for a few years now — with the occasional competition.',
        link: 'https://escalade-rouvroy.fr/',
        title: 'Climbing',
      },
      {
        description: 'Weekend escapes on my Z650, whenever the weather plays along.',
        title: 'Motorbike',
      },
    ],
    'main-title': 'Off-screen',
  },

  languages: {
    en: 'English',
    fr: 'French',
    title: 'Languages',
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
      title: 'Background',
    },
    {
      index: '03',
      link: '#project',
      title: 'Work',
    },
    {
      index: '04',
      link: '#hobby',
      title: 'Off-screen',
    },
    {
      index: '05',
      link: '#contact',
      title: 'Contact',
    },
  ],

  project: {
    'index': '03',
    'kicker': 'A selection — personal, school, and a glimpse of pro.',
    'kind-personal': 'Personal',
    'kind-private': 'Private',
    'kind-school': 'School',
    'list': [
      {
        chips: ['Vue', 'TypeScript', 'Bun', 'Cloudflare', 'Resend'],
        kind: 'personal',
        link: repoUrl('portfolio'),
        subtitle: '2026 rebuild of my professional portfolio.',
        title: 'Portfolio',
        year: '2026 →',
      },
      {
        chips: ['Swift'],
        kind: 'personal',
        link: repoUrl('wizard-tomb'),
        subtitle: 'iOS adaptation of a choose-your-own-adventure gamebook, inspired by the "Fighting Fantasy" series.',
        title: 'Wizard Tomb',
        year: '2026',
      },
      {
        chips: ['Nuxt', 'TypeScript', 'Tailwind', 'Supabase', 'Stripe', 'Claude', 'Resend', 'Vercel'],
        kind: 'personal',
        link: repoUrl('pilpoil'),
        subtitle: 'AI-augmented digital health record for pets.',
        title: 'Pilpoil',
        year: '2026',
      },
      {
        chips: ['Symfony', 'Vue', 'PHP', 'Docker', 'API'],
        kind: 'private',
        subtitle: 'Internal unpaid-invoices tracking tool.',
        title: 'Unpaid Tracking',
        year: '2021',
      },
      {
        chips: ['Laravel', 'Angular', 'Phaser', 'PHP'],
        kind: 'school',
        link: repoUrl('slay-the-demons'),
        subtitle: 'Video game embedded in a web page.',
        title: 'Slay the Demons',
        year: '2020',
      },
      {
        chips: ['Python', 'PyQt'],
        kind: 'school',
        link: repoUrl('bomberman'),
        subtitle: 'Bomberman clone with graphical interface.',
        title: 'Bomberman',
        year: '2019',
      },
    ],
    'main-title': 'Work',
  },

  skill: {
    'index': '01',
    'kicker': 'Four stacks, ordered by daily reach.',
    'list': [
      {
        content: ['Symfony', 'Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Claude'],
        label: 'Day-to-day',
        primary: true,
      },
      {
        content: ['ESLint', 'Oxlint', 'Vitest', 'Playwright'],
        label: 'Tests & quality',
      },
      {
        content: ['MySQL', 'RabbitMQ', 'Docker', 'GitLab', 'Jenkins', 'Grafana'],
        label: 'Infra & data',
      },
      {
        content: ['Bun', 'Swift'],
        label: 'Tools & explorations',
      },
    ],
    'main-title': 'Stack',
  },

  theme: {
    'toggle': 'Toggle theme',
  },
}
