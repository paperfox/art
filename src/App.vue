<script setup>
import DisplayArt from "./components/DisplayArt.vue";
import LeftRail from "./components/LeftRail.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";

const windowWidth = window.innerWidth;
console.log(windowWidth);
const isSmallScreen = windowWidth < 768;
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

<style scoped></style>
