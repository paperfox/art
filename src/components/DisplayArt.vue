<script setup>
import { ref } from 'vue';
import Filters from './Filters.vue';
import inProgress from '../data/sketchData';
import ArtLists from './ArtLists.vue';
import Footer from './Footer.vue';

let sketches = inProgress;

const tab = ref('art');
</script>

<template>
  <main class="main">
    <div>
      <h1>Paperfox</h1>
      <h2>Art by Nathalie Garfinkle</h2>
    </div>
    <div class="nav-tabs">
      <button @click="tab = 'art'" :class="`${tab === 'art' ? 'tab-control active' : 'tab-control'}`" id="tab-art">
        Artwork
      </button>
      <button
        @click="tab = 'sketch'"
        :class="`${tab === 'sketch' ? 'tab-control active' : 'tab-control'}`"
        id="tab-sketch"
      >
        Events & Shop
      </button>
      <button
        @click="tab = 'about'"
        :class="`${tab === 'about' ? 'tab-control active' : 'tab-control'}`"
        id="tab-about"
      >
        About
      </button>
      <button
        @click="tab = 'contact'"
        :class="`${tab === 'contact' ? 'tab-control active' : 'tab-control'}`"
        id="tab-contact"
      >
        Contact
      </button>
    </div>
    <div class="tab-content" id="artTab" v-show="tab === 'art'">
      <div class="artwork">
        <Filters />
      </div>
    </div>
    <div class="tab-content" id="sketchTab" v-show="tab === 'sketch'">
      <div class="artwork">
        <ArtLists :images="sketches" />
      </div>
    </div>
    <div class="tab-content" id="aboutTab" v-show="tab === 'about'">
      <div class="artwork">
        <div>
          <h3>About</h3>
          <p>
            A lifetime creative, Nathalie sticks to painting the things that bring her joy. This leads her across the
            map of wildlife to fantasy creatures, figures to landscapes, and most definitely some pet portraits. Her
            illustrative, but varied, style draws inspiration from animation and the Japanese woodblock printing
            tradition. While she occasionally dabbles in other media, most of her work is in watercolor and ink. If
            she's not creating artwork or adding something new to her
            <a href="https://paperfox-tarot.netlify.app/" target="_blank">Tarot App</a>, you'll likely find her playing
            with her dog, or out in her garden.
          </p>
        </div>
      </div>
    </div>
    <div class="tab-content" id="aboutTab" v-show="tab === 'contact'">
      <div class="artwork">
        <div>
          <h3>Contact</h3>
          <p>contact info goes here</p>
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>
