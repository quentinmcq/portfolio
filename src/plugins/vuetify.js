import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

export default createVuetify({
  global: {
    ripple: false
  },
  icons: {
    iconfont: 'mdiSvg'
  }
});
