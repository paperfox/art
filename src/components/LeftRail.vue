<script setup>
import Footer from "./Footer.vue";

const windowWidth = window.innerWidth;
console.log(windowWidth);
const isSmallScreen = windowWidth < 768;
</script>

<template>
  <aside class="left-rail">
    <div>
      <h1>Paperfox</h1>
      <h2>Art by Nathalie Garfinkle</h2>
    </div>
    <div>
      <h3>About</h3>
      <p>
        A lifetime creative, Nathalie sticks to painting the things that bring
        her joy. This leads her across the map of wildlife to fantasy creatures,
        figures to landscapes, and most definitely some pet portraits. Her
        illustrative, but varied, style draws inspiration from animation and the
        Japanese woodblock printing tradition. While she occasionally dabbles in
        other media, most of her work is in watercolor and ink. If she's not
        creating artwork or adding something new to her
        <a href="https://paperfox.github.io/tarot/">Tarot App</a>, you'll likely
        find her playing with her dog, or out in her garden.
      </p>
    </div>
    <Footer v-if="!isSmallScreen" />
    <!-- <ul class="social-links desktop-only">
      <li class="m-3">
        <a
          href="https://www.instagram.com/paperfoxmakesart/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="../assets/logos/instagramlogo.svg" alt="Instagram" />
        </a>
      </li>
      <li class="m-3">
        <a href="https://cara.app/paperfox" target="_blank" rel="noreferrer">
          <img src="../assets/logos/cara-app-logo-circle.svg" alt="Cara" />
        </a>
      </li>
      <li class="m-3">
        <a
          href="https://www.natickartassociation.org/nathalie-garfinkle"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../assets/logos/NAA_Logo_Final_C2.png"
            alt="Natick Art Association"
          />
        </a>
      </li>
      <li class="m-3">
        <a href="https://github.com/paperfox" target="_blank" rel="noreferrer">
          <img src="../assets/logos/github-mark.svg" alt="GitHub" />
        </a>
      </li>
      <li class="m-3">
        <a
          href="https://www.linkedin.com/in/nathaliegarfinkle/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="../assets/logos/linkedinlogo.svg" alt="LinkedIn" />
        </a>
      </li>
    </ul> -->
  </aside>
</template>

<style scoped></style>
