import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheFooter from '../TheFooter.vue'

describe('TheFooter', () => {
  it('renders footer with correct content and props', async () => {
    const wrapper = mount(TheFooter)

    expect(wrapper.find('.footer').exists()).toBe(true)
    expect(wrapper.find('.footer__credit-message').text()).toBe('footer.credit  footer.tools')
    expect(wrapper.find('.footer__copyright').text()).toBe('footer.copyright')

    // Check if the recaptcha message is rendered correctly
    // expect(wrapper.find('.footer__recaptcha').text()).toBe('footer.recaptcha')
  })
})
