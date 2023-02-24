import { mount } from '@vue/test-utils';
import Presentation from '../Presentation.vue';
import { createVuetify } from 'vuetify';
import { createI18n } from 'vue-i18n';

describe('Presentation component', () => {
  const label = 'testLabel';
  const vuetify = createVuetify();
  const i18n = createI18n();
  const global = {
    plugins: [vuetify, i18n]
  };
  const wrapperGlobal = (component, props, data) => mount(component, { props, global, ...data });

  it('renders label prop correctly', () => {
    const wrapper = wrapperGlobal(Presentation, { label });

    expect(wrapper.props().label).toBe(label);
    expect(wrapper.find('.presentation').attributes('id')).toBe(label);
    expect(wrapper.findComponent({ name: 'CategoryTitle' }).props().label).toBe(label);
  });

  it('renders age correctly', () => {
    const wrapper = wrapperGlobal(Presentation);

    expect(wrapper.find('.presentation__card-spacing').text()).toBe('22');
  });

  it('renders symfony and vuejs links correctly', () => {
    const wrapper = wrapperGlobal(Presentation);

    expect(wrapper.find('.presentation__card-spacing #symfony').attributes('href')).toBe(
      'https://symfony.com/'
    );
    expect(wrapper.find('.presentation__card-spacing #vuejs').attributes('href')).toBe(
      'https://vuejs.org/'
    );
  });

  it('renders presentation buttons correctly', () => {
    const presentations = [
      {
        title: 'Test presentation',
        date: '2022/01/01',
        link: 'https://example.com'
      }
    ];

    const wrapper = wrapperGlobal(Presentation, label, {
      data() {
        return { presentations };
      }
    });

    expect(wrapper.findAllComponents({ name: 'PresentationButton' })).toHaveLength(
      presentations.length
    );
  });
});
