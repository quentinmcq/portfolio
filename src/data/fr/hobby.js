export default [
  {
    title: 'Veille technologique',
    button: 'Mes sources',
    description:
      "J'ai démarré cette activité lorsque je suis devenu développeur. Vous retrouverez ici quelques-unes de mes sources préférées 👨🏻‍💻",
    cover: 'news.webp',
    links: [
      { url: 'https://www.symfony-news.com/', img: 'symfony.webp' },
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
      "J'ai découvert cet univers grâce à un ami qui a su me partager sa passion. J'ai maintenant ma propre collection qui ne cesse de s'agrandir ! 📚",
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
      "Discipline qui m'a passionné lorsque j'étais au lycée et que j'ai choisi de reprendre quelques années après 🧗🏻‍♂️",
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
