import { describe, test, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
const { axe, toHaveNoViolations } = require('jest-axe');
import App from './App.vue';

expect.extend(toHaveNoViolations);

test('App loads', () => {
  const wrapper = mount(App);

  expect(wrapper.text()).toContain('Art by Nathalie Garfinkle');
});

it('App does not have programmatic accessibility violations', async () => {
  const wrapper = mount(App);
  const results = await axe(wrapper.element);

  // does not check color contrast
  expect(results).toHaveNoViolations();
});

describe('Modal', () => {
  test('Modal is hidden by default', () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    expect(wrapper.find('.modal').isVisible()).toBe(false);
  });

  test('Click modal button on art tab displays art details', async () => {
    const wrapper = mount(App);

    await wrapper.find('[data-open="modalGiantPanda"]').trigger('click');
    expect(wrapper.find('.modal').isVisible()).toBe(true);
  });

  test('Close modal shows on art tab list view', async () => {
    const wrapper = mount(App);

    await wrapper.find('[data-open="modalGiantPanda"]').trigger('click');
    await wrapper.find('.close-modal').trigger('click');
    expect(wrapper.find('.modal').isVisible()).toBe(false);
  });
});

describe('Tab', () => {
  test('Artwork tab is selected by default', () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    expect(wrapper.find('#artTab').isVisible()).toBe(true);
  });

  test('Artwork tab shows all art pieces by default', () => {
    const wrapper = mount(App);

    const artworkDiv = wrapper.find('#artTab');
    const images = artworkDiv.findAll('img[src$=".webp"]');
    expect(images).toHaveLength(59);
  });

  test('Artwork tab - filter shows subset of artwork and only 1 filter is applied at a time', async () => {
    const wrapper = mount(App);

    wrapper.find('summary').trigger('click');

    const digitalButton = wrapper
      .findAll('button')
      .filter((button) => button.text() === 'Digital')
      .at(0);
    await digitalButton.trigger('click');

    let artworkDiv = wrapper.find('#artTab');
    let images = artworkDiv.findAll('img[src$=".webp"]');

    expect(images).toHaveLength(4);

    const watercolorButton = wrapper
      .findAll('button')
      .filter((button) => button.text() === 'Watercolor & Ink')
      .at(0);
    await watercolorButton.trigger('click');

    artworkDiv = wrapper.find('#artTab');
    images = artworkDiv.findAll('img[src$=".webp"]');
    expect(images).toHaveLength(40);
  });

  test('Events tab is not selected', () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    expect(wrapper.find('#eventTab').isVisible()).toBe(false);
  });

  test('Select Events tab', async () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    expect(wrapper.find('#eventTab').isVisible()).toBe(false);
    await wrapper.find('#tab-Events').trigger('click');
    expect(wrapper.find('#eventTab').isVisible()).toBe(true);
  });

  test('Select Art tab after visiting Events tab', async () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    expect(wrapper.find('#eventTab').isVisible()).toBe(false);
    await wrapper.find('#tab-Events').trigger('click');
    expect(wrapper.find('#eventTab').isVisible()).toBe(true);
    await wrapper.find('#tab-Art').trigger('click');
    expect(wrapper.find('#eventTab').isVisible()).toBe(false);
    expect(wrapper.find('#artTab').isVisible()).toBe(true);
  });
});
