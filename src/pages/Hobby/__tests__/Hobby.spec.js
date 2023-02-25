import { mount, shallowMount } from '@vue/test-utils';
import { vuetifyInstanceTest, i18nInstanceTest } from '@/plugins/test-configuration';
import Hobby from '../Hobby.vue';
import DialogCard from '@/components/DialogCard/DialogCard.vue';
import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue';
import SeeMore from '@/components/DialogCard/SeeMore/SeeMore.vue';

describe('Hobby component', () => {
  it('renders correctly with the given props', async () => {
    const label = 'test label';
    const items = [
      {
        name: 'Item 1',
        description: 'This is item 1'
      },
      {
        name: 'Item 2',
        description: 'This is item 2'
      },
      {
        name: 'Item 3',
        description: 'This is item 3'
      }
    ];

    const wrapper = mount(Hobby, {
      global: {
        plugins: [vuetifyInstanceTest, i18nInstanceTest]
      },
      props: {
        label,
        items
      }
    });

    const categoryTitle = wrapper.findComponent(CategoryTitle);
    const dialogCard = wrapper.findComponent(DialogCard);
    const seeMore = wrapper.findComponent(SeeMore);

    expect(dialogCard.props('items')).toEqual(items.slice(0, 2));
    expect(dialogCard.props('label')).toBe('test label');

    expect(categoryTitle.props('label')).toBe('test label');

    expect(seeMore.props('items')).toEqual(items);
    expect(seeMore.props('label')).toBe('test label');
    expect(seeMore.isVisible()).toBe(true);

    // click see more button
    seeMore.vm.$emit('see-more', 2);

    //expect(dialogCard.props('items')).toEqual(items.slice(0, 4));
    //expect(seeMore.isVisible()).toBe(false);
  });
});
