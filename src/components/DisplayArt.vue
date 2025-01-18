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

<style scoped>
/* Not Currently in use but I plan to reintroduce pagination  */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--base-spacing);

  li {
    padding: var(--base-spacing);
    border-radius: 0.4rem;

    button {
      font-size: 4rem;
    }

    button {
      padding: 0 var(--base-spacing) var(--base-spacing);
      color: var(--link);
      margin: 0;
      background: none;
      border: none;
      cursor: pointer;

      &:hover,
      &:focus-visible {
        color: var(--text-body);
        text-decoration: underline;
      }

      &:disabled {
        color: var(--text-body);
        cursor: default;
        opacity: 0.5;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
/* End pagination  */
</style>
