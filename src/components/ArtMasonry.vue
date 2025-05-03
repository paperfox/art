<script setup>
import { inject, onMounted, watch, nextTick, ref } from 'vue';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { set } from '@vueuse/core';

const props = defineProps(['images']);

const openModal = inject('openModal');

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const modal = (imgData) => {
  openModal(imgData);
};

// Masonry instance
let masonryInstance = null;

const isLoading = ref(true);

const loadingComplete = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

// loadingComplete();

const initializeMasonry = () => {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  // If Masonry instance already exists, destroy it before reinitializing
  // resolves issues with unselecting filters
  if (masonryInstance) {
    masonryInstance.destroy();
  }

  // Initialize Masonry
  masonryInstance = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 0,
  });

  imagesLoaded(grid, () => {
    masonryInstance.layout();
    loadingComplete();
  });

  setInterval(() => {
    masonryInstance.layout();
  }, 300);
};

onMounted(() => {
  initializeMasonry();
});

watch(
  () => props.images,
  () => {
    nextTick(() => {
      initializeMasonry();
    });
  },
);
</script>

<template>
  <p :style="!isLoading ? 'opacity: 0' : ''">Loading...</p>
  <div :style="isLoading ? 'opacity: 0' : ''">
    <ul class="grid" aria-live="polite">
      <li class="grid-sizer" aria-hidden="true"></li>
      <li v-for="image of images" :key="image.title" class="grid-item">
        <button type="button" class="btn-modal" :data-open="`modal${condense(image.title)}`" @click="modal(image)">
          <img :src="`./art/${image.link}`" :alt="`${image.title}: ${image.desc}`" />
        </button>
      </li>
    </ul>
  </div>
</template>
