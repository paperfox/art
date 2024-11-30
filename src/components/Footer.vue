<script setup>
import footerLinks from '../data/footerContent.js';

const socials = footerLinks;
</script>

<template>
  <footer class="responsive">
    <ul class="social-links">
      <li class="m-3" v-for="social of socials">
        <a :href="social.link" target="_blank" rel="noreferrer">
          <img :src="`./logos/${social.icon}`" :alt="social.title" :class="{ addFilter: 'dark-mode' }" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  margin: var(--xs-spacing) auto;
}

.social-links {
  padding: var(--base-spacing);
  display: flex;
  justify-content: space-between;
  list-style: none;

  img {
    height: 3.2rem;
  }
}

/* Responsive */
@media (min-width: 768.02px) {
  main + .responsive {
    display: none;
  }
}

@media (max-width: 768px) {
  aside .responsive {
    display: none;
  }

  .social-links {
    width: 80%;
    margin-inline: auto;
  }
}
</style>
