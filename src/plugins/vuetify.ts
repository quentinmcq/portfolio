import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const global = {
  ripple: false
};

const icons = {
  iconfont: 'mdiSvg'
};

export function initVuetify(app) {
  const vuetifyInstance = createVuetify({
    defaults: {
      global,
      icons,
      VContainer: {
        style: 'padding: 14px'
      },
      VBtn: {
        style: 'transition: transform 0.6s'
      },
      VChip: {
        style: 'transition: transform 0.6s'
      }
    }
  });

  app.use(vuetifyInstance);
}
