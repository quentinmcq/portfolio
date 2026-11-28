import bombermanShot from '@/assets/cases/bomberman.webp'
import pilpoilShot560 from '@/assets/cases/pilpoil-560.webp'
import pilpoilShot from '@/assets/cases/pilpoil.webp'
import pokebrawlShot560 from '@/assets/cases/pokebrawl-560.webp'
import pokebrawlShot from '@/assets/cases/pokebrawl.webp'
import pokedateShot560 from '@/assets/cases/pokedate-560.webp'
import pokedateShot from '@/assets/cases/pokedate.webp'
import portfolioShot1200 from '@/assets/cases/portfolio-1200.webp'
import portfolioShot600 from '@/assets/cases/portfolio-600.webp'
import portfolioShot from '@/assets/cases/portfolio.webp'
import wizardTombShot560 from '@/assets/cases/wizard-tomb-560.webp'
import wizardTombShot from '@/assets/cases/wizard-tomb.webp'

export interface CaseFigure {
  frame: 'phone' | 'plain'
  height: number
  src: string
  // Lighter cuts made by `bun run cases`, by width.
  variants?: Record<number, string>
  width: number
}

export interface ProjectCase {
  figure: CaseFigure
  site?: string
  slug: string
}

export const CASES: ProjectCase[] = [
  {
    figure: {
      frame: 'phone',
      height: 1800,
      src: pokebrawlShot,
      variants: { 560: pokebrawlShot560 },
      width: 840
    },
    site: 'https://pokebrawl.fr',
    slug: 'pokebrawl'
  },
  {
    figure: {
      frame: 'phone',
      height: 1800,
      src: pokedateShot,
      variants: { 560: pokedateShot560 },
      width: 840
    },
    site: 'https://pokedate.fr',
    slug: 'pokedate'
  },
  {
    figure: {
      frame: 'plain',
      height: 1125,
      src: portfolioShot,
      variants: { 600: portfolioShot600, 1200: portfolioShot1200 },
      width: 1800
    },
    slug: 'portfolio'
  },
  {
    figure: {
      frame: 'phone',
      height: 1826,
      src: wizardTombShot,
      variants: { 560: wizardTombShot560 },
      width: 840
    },
    slug: 'wizard-tomb'
  },
  {
    figure: {
      frame: 'phone',
      height: 1637,
      src: pilpoilShot,
      variants: { 560: pilpoilShot560 },
      width: 840
    },
    site: 'https://pilpoil.app',
    slug: 'pilpoil'
  },
  {
    figure: { frame: 'plain', height: 820, src: bombermanShot, width: 1200 },
    slug: 'bomberman'
  }
]

// Phone captures never show wider than 280px; desktop ones fill the figure column.
const FIGURE_SIZES: Record<CaseFigure['frame'], string> = {
  phone: '280px',
  plain: '(min-width: 1024px) 520px, calc(100vw - 5rem)'
}

export function figureSources(figure: CaseFigure): { sizes: string; srcset: string } | undefined {
  if (!figure.variants) {
    return undefined
  }

  const candidates = [
    ...Object.entries(figure.variants).map(([width, src]) => `${src} ${width}w`),
    `${figure.src} ${figure.width}w`
  ]

  return { sizes: FIGURE_SIZES[figure.frame], srcset: candidates.join(', ') }
}
