<script setup>
import { ref } from "vue";
import Filters from "./Filters.vue";
import artwork from "../data/artData";
import inProgress from "../data/sketchData";

let images = artwork;
let sketches = inProgress;

const newItemPriority = ref(true);

const condense = (img) => {
  return img.split(" ").join("").replace(",", "").replace("’", "");
};
const testing = (imgData) => {
  console.log(imgData);
};
</script>

<template>
  <main class="main">
    <!-- <ul class="nav-tabs">
      <li>
        <button class="tab-control active" @click="openTab(event, 'artTab')">
          Artwork
        </button>
      </li>
      <li>
        <button class="tab-control" @click="openTab(event, 'sketchTab')">
          Sketchbook
        </button>
      </li>
    </ul> -->

    <div class="nav-tabs">
      <label
        :class="`${newItemPriority ? 'tab-control active' : 'tab-control'}`"
      >
        <input type="radio" v-model="newItemPriority" value="true" checked />
        Artwork
      </label>
      <label
        :class="`${!newItemPriority ? 'tab-control active' : 'tab-control'}`"
      >
        <input type="radio" v-model="newItemPriority" value="" />
        Sketchbook
      </label>
    </div>
    <div class="tab-content" id="artTab" v-show="newItemPriority">
      <!-- v-if="make this so that if artwork button is clicked show this"
maybe it should actually be a v-show -->
      <div class="artwork">
        <Filters />
        <ul class="art-list" aria-live="polite">
          <li v-for="(image, index) of images" :key="condense(image.title)">
            <div :class="`artpiece--${index}`">
              <img :src="`../src/assets/art/${image.link}`" :alt="image.desc" />
              <button
                type="button"
                class="open-modal"
                :data-open="`modal${index}`"
                @click="testing(image)"
              >
                <span>{{ image.title }} {{ index }}</span>
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
    <div class="tab-content" id="sketchTab" v-show="!newItemPriority">
      <!-- v-else or v-show -->
      <div class="artwork">
        <ul class="art-list" aria-live="polite">
          <li v-for="(sketch, index) of sketches" :key="condense(sketch.title)">
            <div :class="`artpiece--${index}`">
              <img
                :src="`../src/assets/art/${sketch.link}`"
                :alt="sketch.desc"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
