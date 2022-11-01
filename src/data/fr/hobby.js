export default [
  {
    title: 'Manga',
    button: 'Ma collection',
    type: 'manga',
    description:
      "J'ai découvert cet univers grâce à un ami qui a su me partager sa passion. J'ai maintenant ma propre collection qui ne cesse de s'agrandir ! 📚",
    image: 'manga.jpg',
    link: 'http://mangacollec.com/user/kakashi/collection'
  },
  {
    title: 'VTT',
    button: 'Mes trajets',
    type: 'bike',
    description:
      "VTTiste depuis plusieurs années maintenant, j'adore découvrir de nouveaux paysages, tester de nouveaux parcours et repousser mes limites ! 🚵🏻‍♂️",
    image: 'bike.jpg',
    link: 'https://strava.com/athletes/61088761'
  },
  {
    title: 'Musique',
    button: 'Mes albums',
    type: 'music',
    description:
      "Un de mes passe-temps préférés. J'écoute principalement du rap, de l'electronic, de la dubstep ainsi que des OST de divers anime 🎵",
    image: 'music.png',
    link: 'https://open.spotify.com/user/3lefkr5qkab0fpvg88w7ou80u?si=2d561e3457384487'
  },
  {
    title: 'Veille technologique',
    button: 'Mes sources',
    type: 'news',
    description:
      "J'ai démarré cette activité lorsque je suis devenu développeur. J'ai ajouté quelques-unes de mes sources préférées ci-dessous ! 👨🏻‍💻",
    image: 'news.png',
    link: [
      { url: 'https://app.daily.dev/', img: 'daily_dev.png' },
      { url: 'https://www.symfony-news.com/', img: 'symfony.png' },
      { url: 'https://www.jstips.co/', img: 'js_tips.svg' },
      { url: 'https://grafikart.fr/', img: 'grafikart.png' },
      { url: 'https://dev.to/', img: 'dev_to.png' },
      { url: 'https://news.ycombinator.com/', img: 'hacker_news.jpg' }
    ]
  }
];
