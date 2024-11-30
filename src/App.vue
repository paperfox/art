<script setup>
import { ref, provide } from 'vue';
import DisplayArt from './components/DisplayArt.vue';
import LeftRail from './components/LeftRail.vue';
import Modal from './components/Modal.vue';
import Footer from './components/Footer.vue';

const windowWidth = window.innerWidth;
console.log(windowWidth);
const isSmallScreen = windowWidth < 768;

export default {
  data() {
    return {
      isModalVisible: false,
      modalImage: null,
    };
  },
  methods: {
    openModal(image) {
      this.modalImage = image;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <LeftRail />
    <DisplayArt />
    <div>
      <Footer v-if="isSmallScreen" />
    </div>
    <Modal :image="modalImage" v-if="isModalVisible" @close="closeModal" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>
