import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import {
  vuetifyInstanceTest,
  i18nInstanceTest
} from '@/plugins/test-configuration';
import Home from '../Home.vue';
import LoadingBar from '@/components/LoadingBar/LoadingBar.vue';
import ScrollTop from '@/components/ScrollTop/ScrollTop.vue';
import Presentation from '@/pages/Presentation/Presentation.vue';
import Skill from '@/pages/Skill/Skill.vue';
import Education from '@/pages/Education/Education.vue';
import Hobby from '@/pages/Hobby/Hobby.vue';
import Experience from '@/pages/Experience/Experience.vue';
import Project from '@/pages/Project/Project.vue';
import Contact from '@/pages/Contact/Contact.vue';

describe('Home component', () => {
  const wrapper = shallowMount(Home, {
    global: {
      plugins: [vuetifyInstanceTest, i18nInstanceTest]
    }
  });

  it('renders all the sections', () => {
    expect(wrapper.findComponent(LoadingBar).exists()).toBe(true);
    expect(wrapper.findComponent(ScrollTop).exists()).toBe(true);
    expect(wrapper.findComponent(Presentation).exists()).toBe(true);
    expect(wrapper.findComponent(Skill).exists()).toBe(true);
    expect(wrapper.findComponent(Education).exists()).toBe(true);
    expect(wrapper.findComponent(Experience).exists()).toBe(true);
    expect(wrapper.findComponent(Project).exists()).toBe(true);
    expect(wrapper.findComponent(Hobby).exists()).toBe(true);
    expect(wrapper.findComponent(Contact).exists()).toBe(true);
  });
});
