import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const globalOptions = {
  ripple: false
};

const iconOptions = {
  iconfont: 'mdiSvg'
};

export function initVuetify(app) {
  const vuetifyInstance = createVuetify({
    global: globalOptions,
    icons: iconOptions
  });

  app.use(vuetifyInstance);
}
