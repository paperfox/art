<script setup>
import { ref } from 'vue';
import Filters from './Filters.vue';
import inProgress from '../data/sketchData';
import ArtLists from './ArtLists.vue';

// defineProps(['filteredArts']);

let sketches = inProgress;

const tab = ref('art');
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
        <!-- <img src="./art/preview/1.jpg" alt="Artwork" /> -->
        <Filters />
        <!-- Add pagination - 40ish items per page  
         Lesson 3 Building pagingation - Touring Vue Router probably what I need here-->
      </div>
    </div>
    <div class="tab-content" id="sketchTab" v-show="tab === 'sketch'">
      <div class="artwork">
        <ArtLists :images="sketches" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
