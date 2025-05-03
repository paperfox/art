<script setup>
import { computed } from 'vue';

const socials = [
  {
    title: 'Instagram',
    socialHandle: '@paperfoxmakesart',
    link: 'https://www.instagram.com/paperfoxmakesart/',
    icon: 'instagramlogo.svg',
    addFilter: true,
  },
  {
    title: 'Cara',
    socialHandle: '@paperfox',
    link: 'https://cara.app/paperfox',
    icon: 'cara-app-logo-circle.svg',
    addFilter: true,
  },
  {
    title: 'GitHub',
    socialHandle: '@paperfox',
    link: 'https://github.com/paperfox',
    icon: 'github-mark.svg',
    addFilter: true,
  },
  {
    title: 'Natick Art Association',
    socialHandle: 'Nathalie Garfinkle',
    link: 'https://www.natickartassociation.org/nathalie-garfinkle',
    icon: 'NAA_Logo_Final_C2.png',
  },
  {
    title: 'LinkedIn',
    socialHandle: 'Nathalie Garfinkle',
    link: 'https://www.linkedin.com/in/nathaliegarfinkle/',
    icon: 'linkedinlogo.svg',
    addFilter: true,
  },
];

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
    <li v-for="social of filteredSocials" :key="social.icon.slice(0, 5)">
      <a :href="social.link" target="_blank" rel="noreferrer">
        <span :class="`social social-${social.title.slice(0, 4).toLowerCase()}`"></span>
        <p v-if="showSocialTitles">{{ social.title }} - {{ social.socialHandle }}</p>
      </a>
    </li>
  </ul>
</template>

<style scoped>
ul li {
  * {
    display: inline-block;
  }
}

[class*='social-'] {
  width: 3.2rem;
  height: 3.2rem;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
}

.social-inst {
  background-image: url('../logos/instagramlogo.svg');
}
.social-cara {
  background-image: url('../logos/cara-app-logo-circle.svg');
}
.social-gith {
  background-image: url('../logos/github-mark.svg');
}
.social-nati {
  width: 4rem;
  background-image: url('../logos/NAA_Logo_Final_C2.png');

  filter: none;
  margin-right: calc(var(--base-spacing) * -1);
}
.social-link {
  background-image: url('../logos/linkedinlogo.svg');
}

.footer-socials {
  display: flex;
  flex-wrap: wrap;
  padding: var(--base-spacing);
  justify-content: space-between;
}

.contact-socials li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: var(--xs-spacing) 0;

  p {
    margin: 0;
    padding: 0;
    margin-left: var(--xs-spacing);
  }
}
</style>
