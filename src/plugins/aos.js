import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAos(app) {
  app.AOS = new AOS.init({ offset: 100, duration: 600, disable: ['mobile', 'phone'], once: true });
}
