import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheHeader from '../TheHeader.vue'

describe('TheHeader', () => {
  it('renders header with correct content', async () => {
    const wrapper = mount(TheHeader)

    expect(wrapper.find('.header').exists()).toBe(true)
    expect(wrapper.find('.header__title').exists()).toBe(true)
    expect(wrapper.find('.header__role').exists()).toBe(true)

    expect(wrapper.findComponent({ name: 'VueWriter' }).props()).toEqual({
      array: ['header.developer'],
      caret: 'cursor',
      delay: 2000,
      eraseSpeed: 50,
      intervals: 200,
      iterations: 0,
      start: 0,
      typeSpeed: 80,
    })
  })
})
