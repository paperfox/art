<script setup>
import DeckArray from "../data/footerContent.js";

const socials = DeckArray;

const windowWidth = window.innerWidth;
console.log(windowWidth);
const isSmallScreen = windowWidth < 768;
// import { ref, computed, onMounted, onUnmounted } from "vue";

// export default
//   setup() {
//     const windowWidth = ref(window.innerWidth);

//     const isSmallScreen = computed(() => windowWidth.value < 768); // Adjust breakpoint as needed

//     const onResize = () => {
//       windowWidth.value = window.innerWidth;
//     };

//     onMounted(() => {
//       window.addEventListener("resize", onResize);
//     });

//     onUnmounted(() => {
//       window.removeEventListener("resize", onResize);
//     });

//     return {
//       windowWidth,
//       isSmallScreen,
//     };
//   },
// };

// const isSmallScreen = windowWidth < 768;

// export default {
//   data() {
//     return {
//       windowWidth: window.innerWidth,
//     };
//   },
//   computed: {
//     isSmallScreen() {
//       return this.windowWidth < 768; // Adjust breakpoint as needed
//     },
//   },
//   mounted() {
//     window.addEventListener("resize", this.onResize);
//   },
//   unmounted() {
//     window.removeEventListener("resize", this.onResize);
//   },
//   methods: {
//     onResize() {
//       this.windowWidth = window.innerWidth;
//     },
//   },
// };
</script>

<template>
  <!-- <footer> -->
  <footer
    :class="{
      'mobile-only': isSmallScreen,
      'desktop-only': !isSmallScreen,
    }"
  >
    <ul class="social-links">
      <li class="m-3" v-for="social of socials">
        <a :href="social.link" target="_blank" rel="noreferrer">
          <img
            :src="`../src/assets/logos/${social.icon}`"
            :alt="social.title"
            :class="{ addFilter: 'dark-mode' }"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped></style>
