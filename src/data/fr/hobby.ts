export default [
  {
    title: 'Veille technologique',
    button: 'Mes sources',
    description:
      "J'ai commencé cette activité dès que je suis devenu développeur. Vous retrouverez ici quelques-unes de mes sources préférées 👨🏻‍💻",
    cover: 'news.webp',
    links: [
      { url: 'https://nuxt.com/blog/', img: 'nuxtjs.webp' },
      { url: 'https://www.omglinux.com/', img: 'omglinux.webp' },
      { url: 'https://grafikart.fr/', img: 'grafikart.webp' },
      { url: 'https://dev.to/', img: 'dev_to.webp' },
      { url: 'https://css-tricks.com/', img: 'css_tricks.webp' }
    ]
  },
  {
    title: 'Manga',
    type: 'manga',
    button: 'Ma collection',
    description:
      "Grâce à un ami qui a su partager sa passion avec moi, j'ai découvert cet univers et constitué ma propre collection de mangas, qui ne cesse de s'enrichir au fil du temps 📚",
    cover: 'manga.webp',
    link: 'http://mangacollec.com/user/kakashi/collection',
    images: {
      2023: [
        'collection_1.webp',
        'collection_2.webp',
        'collection_3.webp',
        'collection_4.webp',
        'collection_5.webp',
        'collection_6.webp'
      ],
      2022: ['collection_1.webp', 'collection_2.webp', 'collection_3.webp'],
      2021: [
        'collection_1.webp',
        'collection_2.webp',
        'collection_3.webp',
        'collection_4.webp',
        'collection_5.webp'
      ],
      2020: ['collection_1.webp', 'collection_2.webp', 'collection_3.webp']
    }
  },
  {
    title: 'Escalade',
    type: 'climbing',
    button: 'Mon club',
    description:
      "Discipline qui m'a captivé lorsque j'étais au lycée et que j'ai décidé de reprendre quelques années plus tard 🧗🏻‍♂️",
    cover: 'climbing.webp',
    link: 'https://escalade-rouvroy.fr/',
    images: {
      2023: [
        'picture_1.webp',
        'picture_2.webp',
        'picture_3.webp',
        'picture_4.webp',
        'picture_5.webp',
        'picture_6.webp'
      ]
    }
  },
  {
    title: 'VTT',
    button: 'Mes trajets',
    description:
      "VTTiste depuis plusieurs années maintenant, j'adore découvrir de nouveaux paysages, tester de nouveaux parcours et repousser mes limites 🚵🏻‍♂️",
    cover: 'bike.webp',
    link: 'https://strava.com/athletes/61088761'
  },
  {
    title: 'Musique',
    button: 'Mes albums',
    description:
      "Un de mes passe-temps favoris. J'écoute des genres assez variés et j'adore découvrir de nouveaux artistes 🎵",
    cover: 'music.webp',
    link: 'https://open.spotify.com/user/3lefkr5qkab0fpvg88w7ou80u?si=2d561e3457384487'
  }
];
