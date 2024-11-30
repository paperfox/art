<script setup>
import { ref, provide } from 'vue';
import DisplayArt from './components/DisplayArt.vue';
import LeftRail from './components/LeftRail.vue';
import Modal from './components/Modal.vue';
import Footer from './components/Footer.vue';

const windowWidth = window.innerWidth;
console.log(windowWidth);
const isSmallScreen = windowWidth < 768;

const isModalVisible = ref(false);
const modalImage = ref(null);

const openModal = (image) => {
  modalImage.value = image;
  isModalVisible.value = true;
  // console.log(image);
};

const closeModal = () => {
  isModalVisible.value = false;
};

provide('openModal', openModal);
provide('closeModal', closeModal);
provide('modalImage', modalImage);
provide('isModalVisible', isModalVisible);
</script>

<template>
  <div class="container">
    <LeftRail />
    <DisplayArt />
    <div>
      <Footer v-if="isSmallScreen" />
    </div>
    <Modal />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>
