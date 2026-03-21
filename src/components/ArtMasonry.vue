<script setup>
import { inject, onMounted, watch, nextTick, ref, computed } from 'vue';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Dialog from './Dialog.vue';

const props = defineProps(['images']);

const openModal = inject('openModal');
const modalFocus = ref(null);
const activeElement = ref('');
const currentIndex = ref(0);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const modal = async (imgData) => {
  currentIndex.value = props.images.indexOf(imgData); // track which image opened
  openModal(imgData);
  focusModal();
};

const goToPrev = () => {
  const prevIndex = (currentIndex.value - 1 + props.images.length) % props.images.length;
  currentIndex.value = prevIndex;
  openModal(props.images[prevIndex]);
};

const goToNext = () => {
  const nextIndex = (currentIndex.value + 1) % props.images.length;
  currentIndex.value = nextIndex;
  openModal(props.images[nextIndex]);
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
  return activeElement.value ? `btn-dialog-${activeElement.value}` : null;
});
</script>

<template>
  <ul class="grid" aria-live="polite">
    <li class="grid-sizer" aria-hidden="true"></li>
    <li v-for="image of images" :key="image.title" class="grid-item">
      <button
        command="show-modal"
        commandfor="my-dialog"
        :id="`btn-dialog-${condense(image.title)}`"
        @click="
          activeElement = condense(image.title);
          modal(image);
        "
      >
        <img :src="`./art/${image.link}`" :alt="`${image.title}: ${image.desc}`" />
      </button>
    </li>
  </ul>

  <Dialog :activeElement="activeElementId" :goToPrev="goToPrev" :goToNext="goToNext" />
</template>
