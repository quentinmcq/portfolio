import AOS from 'aos';
import 'aos/dist/aos.css';
import type { App } from 'vue';

export function initAos(app: App<Element>) {
  // @ts-ignore
  app.AOS = new AOS.init({
    offset: window.innerWidth < 768 ? 180 : 120,
    duration: 700,
    once: true
  });
}
