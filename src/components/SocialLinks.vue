<script setup>
import { computed } from 'vue';
import footerLinks from '../data/footerContent.js';

const socials = footerLinks;

const props = defineProps({
  showSocialTitles: {
    type: Boolean,
    default: false,
  },
});

const filteredSocials = computed(() => {
  if (props.showSocialTitles) {
    return socials;
  }

  return socials.slice(0, 4);
});
</script>

<template>
  <ul :class="showSocialTitles ? 'contact-socials' : 'footer-socials'">
    <li v-for="social of filteredSocials" :key="social.icon.slice(0, 5)" showSocialTitles>
      <a :href="social.link" target="_blank" rel="noreferrer">
        <picture>
          <source :srcset="`./logos/white/${social.icon}`" media="(prefers-color-scheme: dark)" />
          <img :src="`./logos/${social.icon}`" :alt="social.title" media="(prefers-color-scheme: light)" />
        </picture>
        <p v-if="showSocialTitles">{{ social.title }}</p>
      </a>
    </li>
  </ul>
</template>
