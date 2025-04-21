import { GITHUB_URL, GITHUB_USERNAME } from '@/misc/constants.ts'

export default [
  {
    chips: ['Symfony', 'VueJS', 'PHP', 'JS', 'Vuetify', 'Docker', 'API'],
    cover: 'unpaid.webp',
    description: 'The application allows you to list unpaid amounts corresponding to unpaid monthly payments. A reminder process is then triggered, including sending reminder SMS and emails, followed by a formal notice and a recovery procedure.',
    link: '',
    subtitle: 'Unpaid follow-up tool',
    title: 'Unpaid Tracking',
    year: '2021',
  },
  {
    chips: ['Laravel', 'PHP', 'JS', 'Livewire', 'Bootstrap'],
    cover: 'couteau-suisse.webp',
    description:
      'The application allows you to create an account and select a type of disability (color blindness, low vision, etc.). It also offers assistance tools, such as a voice assistant, to make everyday life easier.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/swiss-knife`,
    subtitle: 'Site for disabled students',
    title: 'Swiss Knife',
    year: '2020',
  },
  {
    chips: ['Laravel', 'PHP', 'JS', 'InertiaJS', 'Bootstrap'],
    cover: 'teachme.webp',
    description:
      'The application allows you to create an account, modify your personal information and browse the courses available on the site. A role system manages access levels, particularly for administrators and teachers.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/teach-me`,
    subtitle: 'Online course site',
    title: 'TeachMe',
    year: '2020',
  },
  {
    chips: ['VueJS', 'JS', 'Bootstrap'],
    cover: 'edt.webp',
    description: 'The application allows you to consult the timetable of IUT students over several weeks. It also allows you to check the availability of a teacher with a group and to add courses according to free slots',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-schedule`,
    subtitle: 'University timetable',
    title: 'University timetable',
    year: '2020',
  },
  {
    chips: ['Laravel', 'Angular', 'PHP', 'JS', 'Phaser', 'Bootstrap'],
    cover: 'slay-the-demon.webp',
    description:
      'In a fantasy universe, the player fights demons to progress in level and save his village. An account system also allows you to consult the ranking of other players.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/slay-the-demons`,
    subtitle: 'Video game integrated into a web page',
    title: 'Slay the Demons',
    year: '2020',
  },
  {
    chips: ['Laravel', 'PHP', 'Bootstrap'],
    cover: 'tv-time.webp',
    description:
      'The application allows you to create an account and explore the available catalog of series. It is possible to rate episodes, write comments and add series to a watchlist.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/tv-inside`,
    subtitle: 'Series monitoring platform',
    title: 'TV Inside',
    year: '2019',
  },
  {
    chips: ['Python', 'PyQt'],
    cover: 'bomberman.webp',
    description:
      'Players must eliminate their opponents using bombs. Power-ups, hidden in blocks spread across the map, offer bonuses or penalties, thus influencing the course of the game.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/bomberman`,
    subtitle: 'Video game with graphical interface',
    title: 'Bomberman',
    year: '2019',
  },
  {
    chips: ['JS', 'HTML'],
    cover: 'site.webp',
    description:
      'Project to redesign my university\'s website, with the aim of offering a modern and elegant interface, replacing the old version.',
    link: `${GITHUB_URL}/${GITHUB_USERNAME}/university-website`,
    subtitle: 'Redesign of the university website',
    title: 'University website',
    year: '2018',
  },
]
