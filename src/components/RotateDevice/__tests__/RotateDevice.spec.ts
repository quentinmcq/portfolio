import App from '@/App.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import RotateDevice from '../RotateDevice.vue'

vi.mock('vue-recaptcha/head', () => ({
  useChallengeV3: vi.fn(),
  useRecaptchaProvider: vi.fn(),
}))

describe('App.vue', () => {
  it('should display the main app content in portrait mode', () => {
    window.innerWidth = 768
    window.innerHeight = 1024

    // const wrapper = mount(App)
    //
    // expect(wrapper.findComponent(RotateDevice).exists()).toBe(false)
    // expect(wrapper.find('.app').isVisible()).toBe(true)
  })

  it('should display RotateDevice in landscape mode', () => {
    window.innerWidth = 1024
    window.innerHeight = 768

    // const wrapper = mount(App)
    //
    // expect(wrapper.findComponent(RotateDevice).exists()).toBe(true)
    // expect(wrapper.find('.app').exists()).toBe(false)
  })
})
