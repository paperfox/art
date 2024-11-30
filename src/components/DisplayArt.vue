<script setup>
import { ref, inject } from 'vue';
import Filters from './Filters.vue';
import artwork from '../data/artData';
import inProgress from '../data/sketchData';

let images = artwork;
let sketches = inProgress;

const selectedTab = ref(true);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};
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
        <!-- <Filters /> -->
        <ul class="art-list" aria-live="polite">
          <li v-for="(image, index) of images" :key="condense(image.title)">
            <div :class="`artpiece--${index}`">
              <img :src="`./art/${image.link}`" :alt="image.desc" />
              <button type="button" class="open-modal" :data-open="`modal${index}`" @click="$emit('open-modal', image)">
                <span>{{ image.title }}</span>
              </button>
            </div>
          </li>
        </ul>
        <!-- <ul class="pagination">
          <li>
            <button class="first" aria-label="first" disabled="">«</button>
          </li>
          <li>
            <button class="previous" aria-label="previous" disabled="">
              ‹
            </button>
          </li>
          <li class="page-total">1 of 13</li>
          <li><button class="next" aria-label="next">›</button></li>
          <li><button class="last" aria-label="last">»</button></li>
        </ul> -->
      </div>
    </div>
    <div class="tab-content" id="sketchTab" v-show="!selectedTab">
      <div class="artwork">
        <ul class="art-list" aria-live="polite">
          <li v-for="(sketch, index) of sketches" :key="condense(sketch.title)">
            <div :class="`artpiece--${index}`">
              <img :src="`./art/${sketch.link}`" :alt="sketch.desc" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
