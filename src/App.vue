<script setup>
import { ref, provide, watch } from 'vue';
import Filters from './components/Filters.vue';
import SocialLinks from './components/SocialLinks.vue';
import TabContact from './components/TabContact.vue';
import TabAbout from './components/TabAbout.vue';
import TabEvents from './components/TabEvents.vue';
import Modal from './components/Modal.vue';

const isModalVisible = ref(false);
const modalImage = ref(null);

const tabs = [{ name: 'Art' }, { name: 'Events' }, { name: 'About' }, { name: 'Contact' }];

const openModal = (image) => {
  modalImage.value = image;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

provide('openModal', openModal);
provide('closeModal', closeModal);
provide('modalImage', modalImage);
provide('isModalVisible', isModalVisible);

const tab = ref('art');

watch(tab, (newTab) => {
  const recaptchaBadge = document.getElementsByClassName('grecaptcha-badge')[0];
  if (recaptchaBadge) {
    recaptchaBadge.style.display = newTab === 'contact' ? 'block' : 'none';
  }
});
</script>

<template>
  <main class="main">
    <nav class="navbar">
      <div class="nav-brand">
        <a href="" target="_blank" rel="noreferrer" class="nav-logo">
          <picture>
            <source :srcset="`./logos/paperfoxlogo-semibold-update.svg`" media="(prefers-color-scheme: dark)" />
            <img
              :src="`./logos/paperfoxlogo-semibold-update.svg`"
              alt="Paperfox Logo: A fox face in geometric lines with rounded corners"
              media="(prefers-color-scheme: light)"
            />
          </picture>
        </a>
        <div>
          <p class="logo-text">PAPERFOX</p>
          <p class="logo-byline">Art by Nathalie Garfinkle</p>
        </div>
      </div>
      <div class="nav-tabs">
        <button
          v-for="tabItem of tabs"
          :key="tabItem.name"
          @click="tab = tabItem.name.toLowerCase()"
          :class="{ 'tab-control': true, active: tab === tabItem.name.toLowerCase() }"
          :id="`tab-${tabItem.name}`"
        >
          {{ tabItem.name }}
        </button>
      </div>
    </nav>

    <div class="tab-content" id="artTab" v-show="tab === 'art'">
      <Filters />
    </div>
    <!-- <div class="tab-content" id="sketchTab" v-show="tab === 'sketch'">
      <div class="artwork">
        <ArtMasonry :images="inProgress" />
      </div>
    </div> -->
    <div class="tab-content" id="eventTab" v-show="tab === 'events'">
      <TabEvents />
    </div>
    <div class="tab-content" id="aboutTab" v-show="tab === 'about'">
      <TabAbout />
    </div>
    <div class="tab-content" id="contactTab" v-show="tab === 'contact'">
      <TabContact />
    </div>
  </main>
  <footer>
    <SocialLinks />
  </footer>
  <Modal />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');

footer {
  width: 100%;
  margin: var(--xs-spacing) auto;
  max-width: 45rem;
  padding-inline: var(--xs-spacing);
}
</style>
