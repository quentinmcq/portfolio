import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Hobby from '../Hobby.vue';
import DialogCard from '@/components/DialogCard/DialogCard.vue';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import SeeMore from '@/components/DialogCard/SeeMore/SeeMore.vue';
import hobbies from '@/data/fr/hobby';

global.ResizeObserver = require('resize-observer-polyfill');

describe('Hobby component', () => {
  it('renders correctly with the given props', async () => {
    const componentName = 'hobby';
    const items = hobbies;

    const wrapper = mount(Hobby);

    const categoryTitle = wrapper.findComponent(CategoryTitle);
    const dialogCard = wrapper.findComponent(DialogCard);
    const seeMore = wrapper.findComponent(SeeMore);

    expect(dialogCard.props('items')).toEqual(items.slice(0, 2));
    expect(dialogCard.props('componentName')).toBe(componentName);

    expect(categoryTitle.props('componentName')).toBe(componentName);

    expect(seeMore.props('items')).toEqual(items);
    expect(seeMore.props('componentName')).toBe(componentName);
    expect(seeMore.isVisible()).toBe(true);

    //expect(dialogCard.text().split('dialog-card-item').length - 1).toEqual(2);
    // click see more button
    seeMore.vm.$emit('see-more');

    expect(dialogCard.props('items')).toEqual(items.slice(0, 2));
    // expect(seeMore.isVisible()).toBe(false);
  });
});
