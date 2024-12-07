import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '../../App.vue';

describe('paperfox art site', () => {
  it('loads', () => {
    // mount accepts 2 arguments, the component and a list of options as objects
    // these options provide the props to ensure the components work as it would in browser
    const wrapper = mount(App);
    expect(wrapper.classes('container')).toBe(true);
  });
});

// What do I need to test
//
// App Loads - done
// Art tab selected by default - done
// Sketch tab can be selected - done
//
// Artwork Images load with 'featured' filter selected
// sketch tab shows sketch view
//
// image button can be clicked to show modal
// modal close button can be clicked to dismiss modal
// modal background can be clicked to dismiss modal
// esc can be clicked to dismiss modal
//
// filters can be selected and selected filter has active state and list is filtered
// filters can be unselected and unselected filter has active state removed and list is unfiltered
