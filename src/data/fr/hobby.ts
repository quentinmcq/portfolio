export default [
  {
    button: 'Mes sources',
    cover: 'news.webp',
    description:
      'J\'ai commencé cette activité dès que je suis devenu développeur. Vous retrouverez ici quelques-unes de mes sources préférées 👨🏻‍💻',
    links: [
      { img: 'nuxtjs.webp', url: 'https://nuxt.com/blog/' },
      { img: 'omglinux.webp', url: 'https://www.omglinux.com/' },
      { img: 'grafikart.webp', url: 'https://grafikart.fr/' },
      { img: 'dev_to.webp', url: 'https://dev.to/' },
      { img: 'css_tricks.webp', url: 'https://css-tricks.com/' },
    ],
    title: 'Veille technologique',
  },
  {
    button: 'Ma collection',
    cover: 'manga.webp',
    description:
      'Grâce à un ami qui a su partager sa passion avec moi, j\'ai découvert cet univers et constitué ma propre collection de mangas, qui ne cesse de s\'enrichir au fil du temps 📚',
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
    },
    link: 'http://mangacollec.com/user/kakashi/collection',
    title: 'Manga',
    type: 'manga',
  },
  {
    button: 'Mon club',
    cover: 'climbing.webp',
    description:
      'Discipline qui m\'a captivé lorsque j\'étais au lycée et que j\'ai décidé de reprendre quelques années plus tard 🧗🏻‍♂️',
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
    title: 'Escalade',
    type: 'climbing',
  },
  {
    button: 'Mes parcours',
    cover: 'bike.webp',
    description:
      'VTTiste depuis plusieurs années maintenant, j\'adore découvrir de nouveaux paysages, tester de nouveaux parcours et repousser mes limites 🚵🏻‍♂️',
    link: 'https://strava.com/athletes/61088761',
    title: 'VTT',
  },
]
