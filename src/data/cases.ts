import bombermanShot from '@/assets/cases/bomberman.webp'
import pilpoilShot from '@/assets/cases/pilpoil.webp'
import portfolioShot from '@/assets/cases/portfolio.webp'
import wizardTombShot from '@/assets/cases/wizard-tomb.webp'

export interface CaseFigure {
  frame: 'phone' | 'plain'
  height: number
  src: string
  width: number
}

export interface ProjectCase {
  figure: CaseFigure
  site?: string
  slug: string
}

export const CASES: ProjectCase[] = [
  {
    figure: { frame: 'plain', height: 1125, src: portfolioShot, width: 1800 },
    slug: 'portfolio'
  },
  {
    figure: { frame: 'phone', height: 1826, src: wizardTombShot, width: 840 },
    slug: 'wizard-tomb'
  },
  {
    figure: { frame: 'phone', height: 1637, src: pilpoilShot, width: 840 },
    site: 'https://pilpoil.app',
    slug: 'pilpoil'
  },
  {
    figure: { frame: 'plain', height: 820, src: bombermanShot, width: 1200 },
    slug: 'bomberman'
  }
]
