import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheHeader from '../TheHeader.vue';

describe('TheHeader', () => {
  it('renders header with correct content', async () => {
    const wrapper = mount(TheHeader, {
      global: {
        mocks: {
          // $t: (key) => key, // Mocking the $t function to return the translation key itself
        },
      },
    });

    // Check if header element exists
    expect(wrapper.find('.header').exists()).toBe(true);

    // Check if the full name is rendered correctly
    expect(wrapper.find('.header__full-name').text()).toBe('common.firstname common.name');

    // Check if VueWriter component is rendered
    expect(wrapper.find('.header__typed').exists()).toBe(true);

    // // Check if VueWriter component is passed correct props
    // expect(wrapper.findComponent({ name: 'VueWriter' }).props()).toEqual({
    //   array: ['header.developer', 'header.visit'],
    //   typeSpeed: 80,
    //   eraseSpeed: 80,
    //   intervals: 100,
    //   delay: 1300,
    // });
  });
});
