<script setup>
import { ref, reactive, inject } from 'vue';

defineProps(['images']);

const openModal = inject('openModal');
const imageRefs = ref([]);
// const imageHeights = reactive([]);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const modal = (imgData) => {
  openModal(imgData);
};

// update the height of an image after it loads
// function updateImageHeight(index) {
//   const img = imageRefs.value[index]; // Get the image element
//   if (img) {
//     const containerWidth = img.parentElement.offsetWidth; // Get the container's width
//     const aspectRatio = img.naturalHeight / img.naturalWidth; // Calculate the aspect ratio
//     imageHeights[index] = containerWidth * aspectRatio; // Calculate the height based on the container's width
//   }
// }
</script>

<template>
  <ul class="art-list" aria-live="polite">
    <!-- <li
      v-for="(image, index) of images"
      :key="condense(image.title)"
      class="item"
      :style="{ height: `${imageHeights[index] / 4}px` }"
    > -->
    <li v-for="(image, index) of images" :key="condense(image.title)" class="item">
      <button type="button" class="btn-modal" :data-open="`modal${condense(image.title)}`" @click="modal(image)">
        <!-- <figure> -->
        <img :src="`./art/${image.link}`" :alt="`${image.title}: ${image.desc}`" ref="imageRefs" />
        <!-- <figcaption>{{ image.title }}</figcaption>
        </figure> -->
      </button>
    </li>
  </ul>
</template>
