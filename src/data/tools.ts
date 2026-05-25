interface Tool {
  color?: string
  label: string
  link: string
}

const tools: Record<string, Tool> = {
  angular: {
    color: '#DD0031',
    label: 'Angular',
    link: 'https://angular.io/',
  },
  api: {
    label: 'API',
    link: 'https://www.cnil.fr/fr/definition/interface-de-programmation-dapplication-api',
  },
  bun: {
    color: '#FBF0DF',
    label: 'Bun',
    link: 'https://bun.sh/',
  },
  claude: {
    color: '#D97757',
    label: 'Claude',
    link: 'https://www.anthropic.com/claude',
  },
  cloudflare: {
    color: '#F38020',
    label: 'Cloudflare',
    link: 'https://www.cloudflare.com/',
  },
  docker: {
    color: '#2496ED',
    label: 'Docker',
    link: 'https://www.docker.com/',
  },
  eslint: {
    color: '#4B32C3',
    label: 'ESlint',
    link: 'https://eslint.org/',
  },
  gitlab: {
    color: '#FC6D26',
    label: 'GitLab',
    link: 'https://gitlab.com/',
  },
  grafana: {
    color: '#F46800',
    label: 'Grafana',
    link: 'https://grafana.com/',
  },
  jenkins: {
    color: '#D24939',
    label: 'Jenkins',
    link: 'https://www.jenkins.io/',
  },
  laravel: {
    color: '#FF2D20',
    label: 'Laravel',
    link: 'https://laravel.com/',
  },
  mysql: {
    color: '#4479A1',
    label: 'MySQL',
    link: 'https://www.mysql.com/',
  },
  nuxt: {
    color: '#00DC82',
    label: 'Nuxt',
    link: 'https://nuxt.com/',
  },
  oxlint: {
    color: '#A78BFA',
    label: 'Oxlint',
    link: 'https://oxc.rs/docs/guide/usage/linter.html',
  },
  phaser: {
    color: '#3D99F6',
    label: 'Phaser',
    link: 'https://phaser.io/',
  },
  php: {
    color: '#777BB4',
    label: 'PHP',
    link: 'https://www.php.net/',
  },
  pinia: {
    color: '#FFD859',
    label: 'Pinia',
    link: 'https://pinia.vuejs.org/',
  },
  playwright: {
    color: '#2EAD33',
    label: 'Playwright',
    link: 'https://playwright.dev/',
  },
  pyqt: {
    color: '#41CD52',
    label: 'PyQt',
    link: 'https://www.riverbankcomputing.com/static/Docs/PyQt6/',
  },
  python: {
    color: '#306998',
    label: 'Python',
    link: 'https://www.python.org/',
  },
  rabbitmq: {
    color: '#FF6600',
    label: 'RabbitMQ',
    link: 'https://www.rabbitmq.com/',
  },
  redis: {
    color: '#DC382D',
    label: 'Redis',
    link: 'https://redis.io/',
  },
  resend: {
    color: 'var(--fg)',
    label: 'Resend',
    link: 'https://resend.com/',
  },
  stripe: {
    color: '#635BFF',
    label: 'Stripe',
    link: 'https://stripe.com/',
  },
  supabase: {
    color: '#3ECF8E',
    label: 'Supabase',
    link: 'https://supabase.com/',
  },
  swift: {
    color: '#FA7343',
    label: 'Swift',
    link: 'https://www.swift.org/',
  },
  symfony: {
    // Symfony brand is pure black; using the foreground token so the chip
    // dot stays visible across both themes.
    color: 'var(--fg)',
    label: 'Symfony',
    link: 'https://symfony.com/',
  },
  tailwind: {
    color: '#06B6D4',
    label: 'Tailwind',
    link: 'https://tailwindcss.com/',
  },
  typescript: {
    color: '#3178C6',
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  vercel: {
    color: 'var(--fg)',
    label: 'Vercel',
    link: 'https://vercel.com/',
  },
  vitest: {
    color: '#6E9F18',
    label: 'Vitest',
    link: 'https://vitest.dev/',
  },
  vue: {
    color: '#41B883',
    label: 'Vue',
    link: 'https://vuejs.org/',
  },
}

export default tools
