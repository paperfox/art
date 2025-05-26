<script setup>
import { ref, provide } from 'vue';
import Filters from './components/Filters.vue';
import SocialLinks from './components/SocialLinks.vue';
import TabContact from './components/TabContact.vue';
import TabAbout from './components/TabAbout.vue';
import TabEvents from './components/TabEvents.vue';
import Modal from './components/Modal.vue';

const isModalVisible = ref(false);
const modalImage = ref(null);
const isOpen = ref(false);

const tabs = [{ name: 'Art' }, { name: 'Events' }, { name: 'About' }, { name: 'Contact' }];
const tab = ref('art');
const currentYear = new Date().getFullYear();

const openModal = (image) => {
  modalImage.value = image;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const handleTabContentClick = () => {
  isOpen.value = false;
};

provide('openModal', openModal);
provide('closeModal', closeModal);
provide('modalImage', modalImage);
provide('isModalVisible', isModalVisible);
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
      <div>
        <button
          type="button"
          class="toggle"
          :class="!isOpen ? 'closed' : ''"
          @click="isOpen = !isOpen"
          aria-label="Toggle navigation"
        >
          <span class="toggle-icon" />
        </button>
        <div ref="navTabsRef" class="nav-tabs" :class="!isOpen ? 'closed' : ''">
          <button
            v-for="tabItem of tabs"
            :key="tabItem.name"
            @click="
              tab = tabItem.name.toLowerCase();
              handleTabContentClick();
            "
            :class="{ 'tab-control': true, active: tab === tabItem.name.toLowerCase() }"
            :id="`tab-${tabItem.name}`"
            :aria-current="tab === tabItem.name.toLowerCase() ? true : false"
          >
            {{ tabItem.name }}
          </button>
        </div>
      </div>
    </nav>

    <div class="tab-content" id="artTab" v-show="tab === 'art'" @click="handleTabContentClick()">
      <Filters />
    </div>
    <div class="tab-content" id="eventTab" v-show="tab === 'events'" @click="handleTabContentClick()">
      <TabEvents />
    </div>
    <div class="tab-content" id="aboutTab" v-show="tab === 'about'" @click="handleTabContentClick()">
      <TabAbout />
    </div>
    <div class="tab-content" id="contactTab" v-show="tab === 'contact'" @click="handleTabContentClick()">
      <TabContact />
    </div>
  </main>
  <footer>
    <SocialLinks :isModalVisible="isModalVisible" />
    <p class="footer-text">© {{ currentYear }} Nathalie Garfinkle</p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');

footer {
  width: 100%;
  margin: var(--xs-spacing) auto;
  max-width: 45rem;
  padding-inline: var(--xs-spacing);
}

button.toggle {
  display: none;
}

@media (max-width: 768px) {
  button.toggle {
    display: block;
    text-align: right;
    .toggle-icon {
      display: block;
      width: 3.2rem;
      height: 3.2rem;
      margin: var(--base-spacing);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('../close.svg');
    }

    &.closed .toggle-icon {
      background-image: url('../menu.svg');
    }

    @media (prefers-color-scheme: dark) {
      filter: invert(100%);
    }
  }

  .nav-tabs.closed {
    padding: 0;
    background-color: transparent;
    z-index: -1;
    margin-top: -1rem;
    box-shadow: none;
    right: var(--sm-spacing);

    .tab-control {
      border-right: var(--border-weight) solid transparent !important;
      transition: all 0.4s ease;
      right: var(--xs-spacing);
      height: 1px;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
