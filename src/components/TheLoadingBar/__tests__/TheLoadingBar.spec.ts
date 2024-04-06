import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TheLoadingBar from '../TheLoadingBar.vue'

describe('TheLoadingBar', () => {
  it('expect loading bar on site load', async () => {
    const wrapper = mount(TheLoadingBar)

    expect(wrapper.find('.loading-bar').exists()).toBe(true)
    expect(wrapper.find('.cube').exists()).toBe(true)
  })

  it('expect no loading bar after 1 second', async () => {
    vi.useFakeTimers()

    const wrapper = mount(TheLoadingBar)

    expect(wrapper.find('.loading-bar').exists()).toBe(true)
    expect(wrapper.find('.cube').exists()).toBe(true)

    vi.advanceTimersByTime(1000)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.loading-bar').exists()).toBe(false)
    expect(wrapper.find('.cube').exists()).toBe(false)
  })
})
