import { repoUrl } from '@/data/contacts'

export default {
  common: {
    'aria-nav-mobile': 'Navigation mobile',
    'aria-nav-primary': 'Navigation principale',
    'back-to-top': 'Haut de page',
    'close-menu': 'Fermer le menu',
    firstname: 'Quentin',
    name: 'Macq',
    'name-upper': 'MACQ',
    'open-menu': 'Ouvrir le menu',
    'skip-to-content': 'Aller au contenu'
  },

  contact: {
    channels: 'Autres canaux',
    kicker:
      "Une opportunité, un projet, ou juste envie de discuter front-end et café — je suis à l'écoute.",
    'main-title': 'Contact',
    where: 'Où'
  },

  experience: {
    featured: {
      description:
        'Projets transverses, maintenance et refonte des outils internes, contribution à la stratégie SI.',
      eyebrow: 'Poste actuel',
      'link-label': 'Détails sur LinkedIn',
      period: 'CDI · depuis 2023',
      title: 'Développeur full-stack chez Motoblouz'
    },
    'kind-education': 'Études',
    list: [
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: 'Master Informatique · EPSI Lille',
        title: 'Développeur web en alternance',
        year: '2021 — 2023'
      },
      {
        kind: 'work',
        location: 'Motoblouz · Carvin',
        subtitle: "Refonte d'un outil de suivi des impayés",
        title: 'Stage développeur web',
        year: '2021'
      },
      {
        kind: 'education',
        location: 'IUT · Lens',
        title: 'Licence pro Informatique',
        year: '2020 — 2021'
      },
      {
        kind: 'education',
        location: 'IUT · Lens',
        title: 'DUT Informatique',
        year: '2018 — 2020'
      }
    ],
    'main-title': 'Parcours'
  },

  footer: {
    copyright: '© {currentYear} — Quentin Macq',
    source: 'Code source'
  },

  header: {
    'aria-hero': 'Introduction',
    'cta-work': 'Voir le travail',
    lede: 'Full-stack avec une obsession pour la performance front et les nouveaux outils.',
    'meta-location': 'Hauts-de-France',
    role: 'Développeur full-stack'
  },

  hobby: {
    list: [
      {
        button: 'Voir la collection',
        description: 'Lecteur et collectionneur, suivi sur Mangacollec.',
        detail: '933 volumes',
        link: 'https://mangacollec.com/user/kakashi/collection',
        title: 'Mangas'
      },
      {
        description: 'Grimpe en salle, en bloc comme en voie.',
        detail: '7 compétitions',
        title: 'Escalade'
      },
      {
        description: 'Balades le week-end dès que la météo le permet.',
        detail: 'Kawasaki Z650',
        title: 'Moto'
      }
    ],
    'main-title': 'Hors-écran'
  },

  languages: {
    title: 'Langues'
  },

  menu: [
    {
      link: '#skill',
      title: 'Stack'
    },
    {
      link: '#experience',
      title: 'Parcours'
    },
    {
      link: '#project',
      title: 'Travaux'
    },
    {
      link: '#hobby',
      title: 'Hors-écran'
    },
    {
      link: '#contact',
      title: 'Contact'
    }
  ],

  presence: {
    label: 'en ligne'
  },

  project: {
    'case-link-code': 'Voir le code',
    'case-link-site': 'Voir le site',
    cases: {
      bomberman: {
        facts: [
          { label: 'Équipe', value: '3 personnes' },
          { label: 'Période', value: 'Avril à juin 2019' },
          { label: 'Code', value: '≈ 2 460 lignes' },
          { label: 'Adversaires', value: "jusqu'à 3 bots" }
        ],
        'figure-alt':
          'Capture du plateau en cours de partie : murs de pierre, briques destructibles, deux bombes posées et quatre pions colorés à la place des personnages.',
        'figure-meta': 'Capture · personnages remplacés par des pions',
        'figure-title': 'Partie en cours',
        lede: 'Un clone de Bomberman en Python, à jouer contre des amis ou des bots.',
        paragraphs: [
          "Projet scolaire à trois, d'avril à juin 2019 — notre premier vrai programme. Plateau, bombes, power-ups et malus cachés dans les blocs, jusqu'à quatre joueurs humains ou bots, le tout dessiné avec PyQt.",
          "La partie la plus intéressante : les bots. Ils repèrent un bloc destructible à portée, posent une bombe s'ils peuvent se mettre à l'abri, et s'éloignent avant l'explosion."
        ]
      },
      pilpoil: {
        facts: [
          { label: 'Données', value: '437 races référencées' },
          { label: 'IA', value: 'Claude · bilans & symptômes' },
          { label: 'Mobile', value: 'Capacitor · iOS & Android' },
          { label: 'Version', value: 'v1.2' }
        ],
        'figure-alt':
          "Page d'accueil de PilPoil sur mobile : « La santé de vos animaux, au poil », avec un bouton de création de compte et trois chiffres clés.",
        'figure-meta': 'En production',
        'figure-title': 'pilpoil.app',
        lede: "Un carnet de santé numérique pour animaux, qui anticipe les risques selon la race et l'âge.",
        paragraphs: [
          "Le carnet de santé d'un animal, c'est souvent une pochette de papiers et des rappels qu'on oublie. PilPoil centralise l'historique médical, prévient avant les échéances et partage le dossier avec la famille ou le vétérinaire.",
          "Le cœur : une base de 437 races avec leurs prédispositions et un calendrier de suivi recommandé. Claude croise ce profil avec l'historique pour produire des bilans et analyser un symptôme décrit par le propriétaire, réservé aux abonnés."
        ]
      },
      portfolio: {
        facts: [
          { label: 'Hébergement', value: 'Cloudflare' },
          { label: 'Historique', value: '78 commits' }
        ],
        'figure-meta': 'Compteur de visiteurs en direct',
        'figure-title': 'worker/presence.ts',
        lede: 'Le site que vous lisez : un SPA Vue prérendu, hébergé sur Cloudflare, sans librairie de composants.',
        paragraphs: [
          "L'objectif : un site qui charge instantanément et qui ne dépend d'aucune librairie de composants.",
          "Le HTML est prérendu au build depuis le bundle SSR : la page est complète sans JavaScript, Vue s'hydrate ensuite pour les transitions.",
          "Le compteur de visiteurs en direct est un Durable Object Cloudflare : chaque visiteur ouvre un WebSocket, l'objet garde les connexions en hibernation et diffuse le nombre de connectés à chaque arrivée ou départ."
        ]
      },
      'wizard-tomb': {
        facts: [
          { label: 'Plateforme', value: 'iOS 26 · SwiftUI' },
          { label: 'Moteur narratif', value: 'Ink via InkSwift' },
          { label: 'Histoire', value: 'Originale, écrite pour le jeu' },
          { label: 'Longueur', value: '1 790 lignes · 164 passages' }
        ],
        'figure-alt':
          "Écran de l'app : bandeau de statistiques (Habileté, Endurance, Chance, or), texte du premier passage dans le village de Roncebrune et trois choix en bas.",
        'figure-meta': 'Premier passage',
        'figure-title': 'Le Tombeau du Sorcier',
        lede: 'Un livre dont vous êtes le héros, natif iOS, avec de vraies règles de jeu.',
        paragraphs: [
          'Le point de départ, ce sont les Défis Fantastiques de mon enfance : combat à 2d6 + Habileté, jets de Chance, inventaire et fins multiples. Je voulais retrouver ça sur téléphone.',
          "L'aventure est écrite en Ink, pas en Swift. Les combats, l'inventaire et les effets ne vivent pas dans le texte : ce sont des tags que le moteur SwiftUI intercepte au fil de la lecture. L'écriture et la mécanique n'ont plus à se marcher dessus."
        ]
      }
    },
    'kind-personal': 'Perso',
    'kind-school': 'Études',
    'kind-work': 'Pro',
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
        subtitle: "Refonte de l'outil interne de suivi des impayés de Motoblouz.",
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
    'main-title': 'Travaux',
    'status-wip': 'En cours'
  },

  skill: {
    'aria-tools': 'Outils',
    list: [
      {
        content: ['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Symfony', 'Claude'],
        label: 'Au quotidien',
        primary: true
      },
      {
        content: ['Oxlint', 'Vitest', 'Playwright', 'Bun'],
        label: 'Tests & outillage'
      },
      {
        content: ['MySQL', 'RabbitMQ', 'Docker', 'Grafana'],
        label: 'Infra & data'
      }
    ],
    'main-title': 'Stack'
  },

  theme: {
    'to-dark': 'Passer au thème sombre',
    'to-light': 'Passer au thème clair'
  }
}
