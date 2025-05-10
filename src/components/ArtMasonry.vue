<script setup>
import { inject, onMounted, watch, nextTick, ref, computed } from 'vue';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Modal from './Modal.vue';

const props = defineProps(['images']);

const openModal = inject('openModal');
const modalFocus = ref(null);
const activeElement = ref('');

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const modal = async (imgData) => {
  openModal(imgData);
  focusModal();
};
// Masonry instance
let masonryInstance = null;

const initializeMasonry = () => {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  // If Masonry instance already exists, destroy it before reinitializing
  // resolves issues with unselecting filters
  if (masonryInstance) {
    masonryInstance.destroy();
  }

  // Initialize Masonry after images load
  imagesLoaded(grid, function () {
    masonryInstance = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 0,
    });
  });
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

watch(
  () => props.activeElement,
  (newVal) => {
    console.log('activeElement updated in Modal:', newVal);
    props.activeElement = newVal;
  },
);

async function focusModal() {
  await nextTick();
  modalFocus.value = document.getElementById('view-modal');
  if (modalFocus.value) {
    modalFocus.value.focus();
  }
}

const activeElementId = computed(() => {
  return activeElement.value ? `btn-modal-${activeElement.value}` : null;
});
</script>

<template>
  <ul class="grid" aria-live="polite">
    <li class="grid-sizer" aria-hidden="true"></li>
    <li v-for="image of images" :key="image.title" class="grid-item">
      <button
        type="button"
        class="btn-modal"
        :data-open="`modal${condense(image.title)}`"
        @click="
          activeElement = condense(image.title);
          modal(image);
        "
        :id="`btn-modal-${condense(image.title)}`"
      >
        <img :src="`./art/${image.link}`" :alt="`${image.title}: ${image.desc}`" />
      </button>
    </li>
  </ul>
  <Modal :activeElement="activeElementId" />
</template>
