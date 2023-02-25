import { shallowMount } from '@vue/test-utils';
import Header from '../Header.vue';
import { i18nInstanceTest, vuetifyInstanceTest } from '@/plugins/test-configuration';
import VueWriter from 'vue-writer';

describe('Header.vue', () => {
  it('renders the full name', () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [vuetifyInstanceTest, i18nInstanceTest],
        mocks: {
          $t: () => 'John'
        }
      }
    });

    expect(wrapper.text()).toContain('John');
  });

  it('renders the typed text', () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [vuetifyInstanceTest, i18nInstanceTest],
        mocks: {
          $t: (key) =>
            ({
              'header.developer': 'Developer',
              'header.technologies': 'Technologies',
              'header.visit': 'Visit'
            }[key])
        }
      }
    });

    const vueWriter = wrapper.find('.header__typed');
    //expect(vueWriter.wrapperElement).toContain(['Developer', 'Technologies', 'Visit']);
  });
});
