import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheLoadingBar from '../../../components/TheLoadingBar/TheLoadingBar.vue'
import TheScrollTop from '../../../components/TheScrollTop/TheScrollTop.vue'
import ContactPage from '../../ContactPage/ContactPage.vue'
import ExperiencePage from '../../ExperiencePage/ExperiencePage.vue'
import HobbyPage from '../../HobbyPage/HobbyPage.vue'
import PresentationPage from '../../PresentationPage/PresentationPage.vue'
import ProjectPage from '../../ProjectPage/ProjectPage.vue'
import SkillPage from '../../SkillPage/SkillPage.vue'
import HomePage from '../HomePage.vue'

describe('Home component', () => {
  const wrapper = shallowMount(HomePage)

  it('renders all the sections', () => {
    expect(wrapper.findComponent(TheLoadingBar).exists()).toBe(true)
    expect(wrapper.findComponent(TheScrollTop).exists()).toBe(true)
    expect(wrapper.findComponent(PresentationPage).exists()).toBe(true)
    expect(wrapper.findComponent(SkillPage).exists()).toBe(true)
    expect(wrapper.findComponent(ExperiencePage).exists()).toBe(true)
    expect(wrapper.findComponent(ProjectPage).exists()).toBe(true)
    expect(wrapper.findComponent(HobbyPage).exists()).toBe(true)
    expect(wrapper.findComponent(ContactPage).exists()).toBe(true)
  })
})
