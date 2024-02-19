import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Header from '../Header.vue';

describe('Header.vue', () => {
  it('renders the full name', () => {
    const wrapper = shallowMount(Header);

    expect(wrapper.text()).toContain('common.firstname common.name');
  });
});
