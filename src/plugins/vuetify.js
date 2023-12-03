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
    defaults: {
      global: globalOptions,
      icons: iconOptions,
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
