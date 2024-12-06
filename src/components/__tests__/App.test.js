import { mount } from '@vue/test-utils';
import { describe, it, test, expect } from 'vitest';
import App from '../../App.vue';

describe('paperfox art site', () => {
  it('loads', () => {
    // mount accepts 2 arguments, the component and a list of options as objects
    // these options provide the props to ensure the components work as it would in browser
    const wrapper = mount(App);
    expect(wrapper.classes('container')).toBe(true);
  });
  it('shows art tab selected', () => {
    const wrapper = mount(App);
    const tabs = wrapper.find('#tab-art').text();
    expect(tabs).toBe('Artwork');
  });
  test('select sketch tab', async () => {
    // triggering an event that emites a promise so we need async to wait for it
    const wrapper = mount(App);
    // const sketchTab = wrapper.find('#tab-sketch');
    // find is similar to native js 'querySelector' function
    await wrapper.find('#tab-sketch').trigger('click');
    // console.log(await wrapper.find('#tab-sketch').trigger('click'));
    expect(wrapper.find('#tab-sketch').classes()).toBe(['active']);

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
