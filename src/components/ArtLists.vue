<script setup>
import { inject } from 'vue';

defineProps(['images']);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const openModal = inject('openModal');

const modal = (imgData) => {
  openModal(imgData);
};
</script>

<template>
  <ul class="art-list" aria-live="polite">
    <li v-for="(image, index) of images" :key="condense(image.title)">
      <div :class="`artpiece--${index}`">
        <img :src="`./art/${image.link}`" :alt="image.desc" />
        <button type="button" class="open-modal" :data-open="`modal${index}`" @click="modal(image)">
          <span>{{ image.title }}</span>
        </button>
      </div>
    </li>
  </ul>
</template>
