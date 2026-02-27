import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PresentationPage from '../PresentationPage.vue'

describe('Presentation component', () => {
  const wrapper = mount(PresentationPage)

  it('renders the presentation page container', () => {
    expect(wrapper.find('.presentation-page').exists()).toBe(true)
  })

  it('renders four PresentationButton components', () => {
    const presentationButtons = wrapper.findAllComponents({
      name: 'PresentationPageButton',
    })
    expect(presentationButtons.length).toBe(4)
  })

  it('renders the presentation card', () => {
    const card = wrapper.find('.presentation-page__card')
    expect(card.exists()).toBe(true)
  })

  it('renders the content section', () => {
    const content = wrapper.find('.presentation-page__content')
    expect(content.exists()).toBe(true)
  })

  it('renders the avatar section', () => {
    const avatar = wrapper.find('.presentation-page__avatar')
    expect(avatar.exists()).toBe(true)
  })
})
