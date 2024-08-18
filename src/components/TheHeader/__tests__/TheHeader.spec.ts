import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheHeader from '../TheHeader.vue'

describe('TheHeader', () => {
  it('renders header with correct content', async () => {
    const wrapper = mount(TheHeader)

    expect(wrapper.find('.header').exists()).toBe(true)
    expect(wrapper.find('.header__full-name').text()).toBe('common.firstname common.name')
    expect(wrapper.find('.header__typed').exists()).toBe(true)

    expect(wrapper.findComponent({ name: 'VueWriter' }).props()).toEqual({
      array: ['header.developer', 'header.visit'],
      caret: 'cursor',
      delay: 1300,
      eraseSpeed: 80,
      intervals: 100,
      iterations: 0,
      start: 0,
      typeSpeed: 80,
    })
  })
})
