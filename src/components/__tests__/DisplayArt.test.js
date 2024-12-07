import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import DisplayArt from '../DisplayArt.vue';

describe('art display', () => {
  it('loads', () => {
    // mount accepts 2 arguments, the component and a list of options as objects
    // these options provide the props to ensure the components work as it would in browser
    const wrapper = mount(DisplayArt);
    expect(wrapper.classes('main')).toBe(true);
  });

  it('shows art tab selected by default', async () => {
    const wrapper = mount(DisplayArt);
    const tabs = wrapper.find('.tab-control.active').text();
    // the below works, i just have to fix how my images load becuase rn they load after the test runs
    // const images = wrapper.findAll('img');
    // expect(images).toHaveLength(5);
    expect(tabs).toBe('Artwork');
  });

  it('shows sketch tab selected', async () => {
    const wrapper = mount(DisplayArt);
    const tabs = wrapper.find('button#tab-sketch');
    await tabs.trigger('click');
    expect(tabs.classes()).toContain('active');
  });
});
