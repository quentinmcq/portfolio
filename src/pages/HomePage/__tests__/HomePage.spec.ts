import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HomePage from '../HomePage.vue';
import TheLoadingBar from '../../../components/TheLoadingBar/TheLoadingBar.vue';
import TheScrollTop from '../../../components/TheScrollTop/TheScrollTop.vue';
import PresentationPage from '../../PresentationPage/PresentationPage.vue';
import SkillPage from '../../SkillPage/SkillPage.vue';
import EducationPage from '../../EducationPage/EducationPage.vue';
import HobbyPage from '../../HobbyPage/HobbyPage.vue';
import ExperiencePage from '../../ExperiencePage/ExperiencePage.vue';
import ProjectPage from '../../ProjectPage/ProjectPage.vue';
import ContactPage from '../../ContactPage/ContactPage.vue';

describe('Home component', () => {
  const wrapper = shallowMount(HomePage);

  it('renders all the sections', () => {
    expect(wrapper.findComponent(TheLoadingBar).exists()).toBe(true);
    expect(wrapper.findComponent(TheScrollTop).exists()).toBe(true);
    expect(wrapper.findComponent(PresentationPage).exists()).toBe(true);
    expect(wrapper.findComponent(SkillPage).exists()).toBe(true);
    expect(wrapper.findComponent(EducationPage).exists()).toBe(true);
    expect(wrapper.findComponent(ExperiencePage).exists()).toBe(true);
    expect(wrapper.findComponent(ProjectPage).exists()).toBe(true);
    expect(wrapper.findComponent(HobbyPage).exists()).toBe(true);
    expect(wrapper.findComponent(ContactPage).exists()).toBe(true);
  });
});
