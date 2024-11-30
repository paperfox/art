<script setup>
import DeckArray from '../data/footerContent.js';

const socials = DeckArray;
// come back to this, there's gotta be a way to improve it
const windowWidth = window.innerWidth;
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
