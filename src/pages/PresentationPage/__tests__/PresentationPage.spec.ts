import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PresentationPage from '../PresentationPage.vue'

describe('Presentation component', () => {
  const wrapper = mount(PresentationPage)

  it('renders the category title with the correct label', () => {
    const categoryTitle = wrapper.findComponent({ name: 'CategoryTitle' })
    expect(categoryTitle.exists()).toBe(true)
    expect(categoryTitle.props('componentName')).toBe('presentation')
  })

  it('renders four PresentationButton components', () => {
    const presentationButtons = wrapper.findAllComponents({
      name: 'PresentationPageButton',
    })
    expect(presentationButtons.length).toBe(4)
  })

  it('renders content for part 1 of the presentation', () => {
    const part1 = wrapper.find('.presentation-page__card-spacing:nth-child(1)')
    expect(part1.exists()).toBe(true)
    expect(part1.text()).toContain('presentation.part-1')
  })

  it('renders content for part 2 of the presentation', () => {
    const part2 = wrapper.find('.presentation-page__card-spacing:nth-child(2)')
    expect(part2.exists()).toBe(true)
    expect(part2.text()).toContain('presentation.part-2')
  })

  it('renders content for part 3 of the presentation', () => {
    const part3 = wrapper.find(
      '.presentation-page__card-style > div:nth-child(2) > div:nth-child(3)',
    )
    expect(part3.exists()).toBe(true)
    expect(part3.text()).toContain('presentation.part-3')
  })
})
