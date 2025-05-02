<script setup>
import { ref, reactive, inject, onMounted, watch, nextTick } from 'vue';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const props = defineProps(['images']);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const openModal = inject('openModal');

const modal = (imgData) => {
  openModal(imgData);
};

const imageRefs = ref([]);
const imageHeights = reactive([]);

// update the height of an image after it loads
function updateImageHeight(index) {
  const img = imageRefs.value[index];
  if (img) {
    imageHeights[index] = img.naturalHeight;
  }
}

// Masonry instance
let masonryInstance = null;

// Function to initialize Masonry and imagesLoaded
// const initializeMasonry = () => {
//   const grid = document.querySelector('.grid');
//   if (!grid) return;

//   // Initialize Masonry
//   masonryInstance = new Masonry(grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//     // horizontalOrder: true,
//     gutter: 0, // Optional: Adjust the spacing between items
//   });

//   // Use imagesLoaded to ensure layout updates after images are loaded
//   imagesLoaded(grid, () => {
//     masonryInstance.layout();
//   });
// };

const initializeMasonry = () => {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  // If Masonry instance already exists, destroy it before reinitializing
  if (masonryInstance) {
    masonryInstance.destroy();
  }

  // Initialize Masonry
  masonryInstance = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 0, // Optional: Adjust the spacing between items
  });

  // Use imagesLoaded to ensure layout updates after images are loaded
  imagesLoaded(grid, () => {
    masonryInstance.layout();
  });
};

onMounted(() => {
  initializeMasonry();
});

// Watch for changes in the images array and reinitialize Masonry
watch(
  () => props.images,
  () => {
    // Reinitialize Masonry when images change
    nextTick(() => {
      initializeMasonry();
    });
  },
);
</script>

<template>
  <ul class="grid" aria-live="polite">
    <li class="grid-sizer" aria-hidden="true"></li>
    <li v-for="(image, index) of images" :key="condense(image.title)" class="grid-item">
      <button type="button" class="btn-modal" :data-open="`modal${condense(image.title)}`" @click="modal(image)">
        <img
          :src="`./art/${image.link}`"
          :alt="`${image.title}: ${image.desc}`"
          ref="imageRefs"
          @load="updateImageHeight(index)"
        />
      </button>
    </li>
  </ul>
</template>
