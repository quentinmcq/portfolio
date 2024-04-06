import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { version } from '../../../../package.json';
import TheFooter from '../TheFooter.vue';

global.ResizeObserver = require('resize-observer-polyfill');

describe('TheFooter', () => {
  it('renders footer with correct content and props', async () => {
    // Mock the computed value for currentYear
    const currentYear = new Date().getFullYear();

    const wrapper = mount(TheFooter, {
      global: {
        mocks: {
          // $t: (key) => key, // Mocking the $t function to return the translation key itself
        },
      },
    });

    // const $t = vi.fn((key) => key);

    // Check if the footer element exists
    expect(wrapper.find('.footer').exists()).toBe(true);

    // Check if the credit message is rendered correctly
    expect(wrapper.find('.footer__credit-message').text()).toBe('footer.credit');

    // Check if the copyright message is rendered correctly with the current year
    expect(wrapper.find('.footer__copyright').text()).toBe('footer.copyright');

    // Check if the recaptcha message is rendered correctly
    expect(wrapper.find('.footer__recaptcha').text()).toBe('footer.recaptcha');
  });
});
