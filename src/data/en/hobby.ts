export default [
  {
    button: 'My sources',
    cover: 'news.webp',
    description:
      'I started this activity when I was just starting out as a developer. Here are some of my favorite sources 👨🏻‍💻',
    links: [
      { img: 'nuxtjs.webp', url: 'https://nuxt.com/blog/' },
      { img: 'omglinux.webp', url: 'https://www.omglinux.com/' },
      { img: 'grafikart.webp', url: 'https://grafikart.fr/' },
      { img: 'dev_to.webp', url: 'https://dev.to/' },
      { img: 'css_tricks.webp', url: 'https://css-tricks.com/' },
    ],
    title: 'Technological watch',
  },
  {
    button: 'My collection',
    cover: 'manga.webp',
    description:
      'Thanks to a friend who shared his passion with me, I discovered this universe and built my own manga collection, which continues to grow over time 📚',
    images: {
      2020: ['collection_1.webp', 'collection_2.webp', 'collection_3.webp'],
      2021: [
        'collection_1.webp',
        'collection_2.webp',
        'collection_3.webp',
        'collection_4.webp',
        'collection_5.webp',
      ],
      2022: ['collection_1.webp', 'collection_2.webp', 'collection_3.webp'],
      2023: [
        'collection_1.webp',
        'collection_2.webp',
        'collection_3.webp',
        'collection_4.webp',
        'collection_5.webp',
        'collection_6.webp',
      ],
      2025: [
        'collection_1.webp',
        'collection_2.webp',
        'collection_3.webp',
        'collection_4.webp',
        'collection_5.webp',
        'collection_6.webp',
        'collection_7.webp',
        'collection_8.webp',
        'collection_9.webp',
        'collection_10.webp',
      ],
    },
    link: 'http://mangacollec.com/user/kakashi/collection',
    title: 'Manga',
    type: 'manga',
  },
  {
    button: 'My club',
    cover: 'climbing.webp',
    description:
      'A discipline that captivated me during my studies and that I chose to take up again a few years later 🧗🏻',
    images: {
      2022: [
        'picture_1.webp',
        'picture_2.webp',
        'picture_3.webp',
      ],
      2023: [
        'picture_1.webp',
        'picture_2.webp',
        'picture_3.webp',
      ],
      2024: [
        'picture_1.webp',
        'picture_2.webp',
        'picture_3.webp',
        'picture_4.webp',
      ],
    },
    link: 'https://escalade-rouvroy.fr/',
    title: 'Climbing',
    type: 'climbing',
  },
  {
    button: 'My journeys',
    cover: 'bike.webp',
    description:
      'Mountain biker for several years now, I love discovering new landscapes, testing new routes and pushing my limits 🚵🏻‍♂️',
    link: 'https://strava.com/athletes/61088761',
    title: 'VTT',
  },
]
