import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import DialogCard from '@/components/DialogCard/DialogCard.vue'
import SeeMore from '@/components/DialogCard/SeeMore/SeeMore.vue'
import hobbies from '@/data/fr/hobby'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HobbyPage from '../HobbyPage.vue'
describe('Hobby component', () => {
  it('renders correctly with the given props', async () => {
    const componentName = 'hobby'
    const items = hobbies

    const wrapper = mount(HobbyPage)

    const categoryTitle = wrapper.findComponent(CategoryTitle)
    const dialogCard = wrapper.findComponent(DialogCard)
    const seeMore = wrapper.findComponent(SeeMore)

    expect(dialogCard.props('items')).toEqual(items.slice(0, 2))
    expect(dialogCard.props('componentName')).toBe(componentName)

    expect(categoryTitle.props('componentName')).toBe(componentName)

    expect(seeMore.props('items')).toEqual(items)
    expect(seeMore.props('componentName')).toBe(componentName)
    expect(seeMore.isVisible()).toBe(true)

    seeMore.vm.$emit('see-more')

    expect(dialogCard.props('items')).toEqual(items.slice(0, 2))
  })
})
