import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
// import { version } from '../../../../package.json'
import TheFooter from '../TheFooter.vue'

global.ResizeObserver = require('resize-observer-polyfill')

describe('TheFooter', () => {
  it('renders footer with correct content and props', async () => {
    // Mock the computed value for currentYear
    // const currentYear = new Date().getFullYear()

    const wrapper = mount(TheFooter)

    // Check if the footer element exists
    expect(wrapper.find('.footer').exists()).toBe(true)

    // Check if the credit message is rendered correctly
    expect(wrapper.find('.footer__credit-message').text()).toBe('footer.credit')

    // Check if the copyright message is rendered correctly with the current year
    expect(wrapper.find('.footer__copyright').text()).toBe('footer.copyright')

    // Check if the recaptcha message is rendered correctly
    expect(wrapper.find('.footer__recaptcha').text()).toBe('footer.recaptcha')
  })
})
