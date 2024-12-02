<script setup>
import { ref } from 'vue';
import Filters from './Filters.vue';
import inProgress from '../data/sketchData';
import ArtLists from './ArtLists.vue';

defineProps(['filteredArts']);

let sketches = inProgress;

const selectedTab = ref(true);
</script>

<template>
  <main class="main">
    <div class="nav-tabs">
      <label :class="`${selectedTab ? 'tab-control active' : 'tab-control'}`">
        <input type="radio" v-model="selectedTab" value="true" checked />
        Artwork
      </label>
      <label :class="`${!selectedTab ? 'tab-control active' : 'tab-control'}`">
        <input type="radio" v-model="selectedTab" value="" />
        Sketchbook
      </label>
    </div>
    <div class="tab-content" id="artTab" v-show="selectedTab">
      <div class="artwork">
        <Filters />
        <!-- Add pagination - 40ish items per page  -->
      </div>
    </div>
    <div class="tab-content" id="sketchTab" v-show="!selectedTab">
      <div class="artwork">
        <ArtLists :images="sketches" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
