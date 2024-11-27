<script setup>
import DeckArray from '../data/footerContent.js';

const socials = DeckArray;

const windowWidth = window.innerWidth;
console.log(windowWidth);
const isSmallScreen = windowWidth < 768;
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
          <img :src="`./logos/${social.icon}`" :alt="social.title" :class="{ addFilter: 'dark-mode' }" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped></style>
