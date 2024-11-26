<script setup>
import { ref } from "vue";
import Filters from "./Filters.vue";
import artwork from "../data/artData";
import sketches from "../data/sketchData";

let images = artwork;

const openTab = () => {
  if (sketchTab) {
    images = sketches;
  } else {
    images = artwork;
  }
};
</script>

<template>
  <main class="main">
    <ul class="nav-tabs">
      <li>
        <button class="tab-control active" onclick="openTab(event, 'artTab')">
          Artwork
        </button>
      </li>
      <li>
        <button class="tab-control" onclick="openTab(event, 'sketchTab')">
          Sketchbook
        </button>
      </li>
    </ul>
    <div class="tab-content active" id="artTab">
      <div class="artwork">
        <ul class="art-list" aria-live="polite">
          <Filters />
          <li v-for="(image, index) of images" :key="index">
            <div :class="`artpiece--${index}`">
              <img :src="`../src/assets/art/${image.link}`" :alt="image.desc" />
              <button
                type="button"
                class="open-modal"
                :data-open="`modal${index}`"
              >
                <span>{{ image.title }} {{ index }}</span>
              </button>
            </div>
          </li>
        </ul>
        <ul class="pagination">
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
        </ul>
      </div>
    </div>
    <div class="tab-content" id="sketchTab">
      <div class="artwork">
        <ul class="art-list-sketches">
          <li v-for="(image, index) of images" :key="index">
            <div :class="`artpiece--${index}`">
              <img :src="`../src/assets/art/${image.link}`" :alt="image.desc" />
              <button
                type="button"
                class="open-modal"
                :data-open="`modal${index}`"
              >
                <span>{{ image.title }} {{ index }}</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
