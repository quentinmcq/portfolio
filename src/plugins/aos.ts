import type { App } from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

export function initAos(app: App<Element>) {
  // @ts-expect-error suppress given error "Vue: Property AOS does not exist on type App<Element>"
  app.AOS = new AOS.init({
    duration: 700,
    offset: window.innerWidth < 768 ? 180 : 120,
    once: true,
  })
}
