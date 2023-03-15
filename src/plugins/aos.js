import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAos(app) {
  app.AOS = new AOS.init({
    offset: window.innerWidth < 768 ? 180 : 120,
    duration: 700,
    once: true
  });
}
