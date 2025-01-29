<script setup>
import { ref, watch } from 'vue';
import Filters from './Filters.vue';
import inProgress from '../data/sketchData';
import ArtLists from './ArtLists.vue';

import { setTheme } from '../utils/theme';

// setTheme();

let sketches = inProgress;

const tab = ref('art');

watch(tab, (newTab) => {
  if (newTab === 'sketch') {
    setTheme('blue');
  } else {
    setTheme('yellow');
  }
});
</script>

<template>
  <main class="main">
    <div class="nav-tabs">
      <button @click="tab = 'art'" :class="`${tab === 'art' ? 'tab-control active' : 'tab-control'}`" id="tab-art">
        Artwork
      </button>
      <button
        @click="tab = 'sketch'"
        :class="`${tab === 'sketch' ? 'tab-control active' : 'tab-control'}`"
        id="tab-sketch"
      >
        Sketchbook
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
  </main>
</template>
