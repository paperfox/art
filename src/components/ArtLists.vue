<script setup>
import { ref, reactive, inject } from 'vue';

defineProps(['images']);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const openModal = inject('openModal');

const modal = (imgData) => {
  openModal(imgData);
};

// Refs to track all image elements
const imageRefs = ref([]);

// Reactive array to store the heights of images
const imageHeights = reactive([]);

// Function to update the height of an image after it loads
function updateImageHeight(index) {
  const img = imageRefs.value[index]; // Get the image element
  // if (img) {
  //   imageHeights[index] = img.naturalHeight; // Store the height in the array
  // }

  if (img) {
    const containerWidth = img.parentElement.offsetWidth; // Get the container's width
    const aspectRatio = img.naturalHeight / img.naturalWidth; // Calculate the aspect ratio
    imageHeights[index] = containerWidth * aspectRatio; // Calculate the height based on the container's width
  }
}
</script>

<template>
  <ul class="art-list" aria-live="polite">
    <li
      v-for="(image, index) of images"
      :key="condense(image.title)"
      class="item"
      :style="{ height: `${imageHeights[index] / 4}px` }"
    >
      <button type="button" class="btn-modal" :data-open="`modal${condense(image.title)}`" @click="modal(image)">
        <figure>
          <img :src="`./art/${image.link}`" :alt="image.desc" ref="imageRefs" />
          <figcaption>{{ image.title }}</figcaption>
        </figure>
      </button>
    </li>
  </ul>
</template>
