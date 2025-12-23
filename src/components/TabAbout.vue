<script setup></script>
<template>
  <div class="text-content">
    <h1>About</h1>
    <div>
      <picture> <img :src="`./nathalie-naos.jpg`" alt="Photo of Nathalie at her booth at an art market" /></picture>
      <div>
        <p>
          A lifetime creative, Nathalie sticks to painting the things that bring her joy. This leads her across the map
          of wildlife to fantasy creatures, figures to landscapes, and most definitely some pet portraits. Her
          illustrative, but varied, style draws inspiration from animation and the Japanese woodblock printing
          tradition, particularly the Shin Hanga movement. While she occasionally dabbles in other media, most of her
          work is in watercolor and ink. If she's not creating artwork or adding something new to her
          <a href="https://paperfox-tarot.netlify.app/" target="_blank">Tarot App</a>, you'll likely find her playing
          with her dog, out in her garden, or rebuilding parts of this site.
        </p>
        <p>
          While she is primarily based in the northeastern United States, she loves to travel and see new and exciting
          places, plants, and animals.
        </p>
        <p>
          Looking for a piece of art not listed here? Recently the build of older work was moved to an archive. If it's
          a piece of Nathalie's work that was posted online, it's almost guaranteed to be listed there.
          <br />
          <a href="https://archive.paperfox.art" target="_blank">Browse the Archives</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-content picture {
  max-height: 70rem;
  overflow: hidden;
  max-width: 70rem;
  border-radius: 50%;
  margin-top: var(--base-spacing);
}

@media (max-width: 768px) {
  .text-content picture {
    max-height: 30rem;
    max-width: 30rem;
    margin-top: 0;
    margin-inline: auto;
  }
}
</style>
