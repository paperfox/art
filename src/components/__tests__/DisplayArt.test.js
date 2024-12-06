import { mount } from '@vue/test-utils';
import { describe, it, test, expect } from 'vitest';
import DisplayArt from '../DisplayArt.vue';

describe('art display', () => {
  it('loads', () => {
    // mount accepts 2 arguments, the component and a list of options as objects
    // these options provide the props to ensure the components work as it would in browser
    const wrapper = mount(DisplayArt);
    expect(wrapper.classes('main')).toBe(true);
  });
  it('shows art tab selected', () => {
    const wrapper = mount(DisplayArt);
    const tabs = wrapper.find('.tab-control.active').text();
    expect(tabs).toBe('Artwork');
  });
  test('select sketch tab', async () => {
    // triggering an event that emites a promise so we need async to wait for it
    const wrapper = mount(DisplayArt, {
      data() {
        return {
          clicked: false,
        };
      },
    });
    const sketchTab = wrapper.find('.tab-control').text('');
    // find is similar to native js 'querySelector' function
    // await sketchTab.trigger('click');
    console.log(sketchTab);
    // expect(sketchTab.toH;
  });
});

// What do I need to test
// App Loads - done
// Artwork Images load with 'featured' filter selected
// sketch tab shows sketch view
// image button can be clicked to show modal
// modal close button can be clicked to dismiss modal
// modal background can be clicked to dismiss modal
// esc can be clicked to dismiss modal
// filters can be selected and selected filter has active state and list is filtered
// filters can be unselected and unselected filter has active state removed and list is unfiltered
