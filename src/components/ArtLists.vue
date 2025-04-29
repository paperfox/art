<script setup>
import { inject } from 'vue';

defineProps(['images']);

const condense = (img) => {
  return img.split(' ').join('').replace(',', '').replace('’', '');
};

const openModal = inject('openModal');

const modal = (imgData) => {
  openModal(imgData);
};
</script>

<template>
  <!-- <ul class="art-list" aria-live="polite">
    <li v-for="(image, index) of images" :key="condense(image.title)" class="item" style="height: 140px">
      <div :class="`artpiece--${index}`">
        <button type="button" class="btn-modal" :data-open="`modal${condense(image.title)}`" @click="modal(image)">
          <figure>
            <img :src="`./art/${image.link}`" :alt="image.desc" />
            <figcaption>{{ image.title }}</figcaption>
          </figure>
        </button>
      </div>
    </li>
  </ul> -->

  <ul class="art-list" aria-live="polite">
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 180px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 150px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 320px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 180px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 150px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 400px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 180px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 150px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 280px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 180px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 150px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 300px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 180px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 150px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 320px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 280px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 180px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 150px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 400px"></li>
    <li class="item" style="height: 140px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 170px"></li>
    <li class="item" style="height: 120px"></li>
    <li class="item" style="height: 220px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 160px"></li>
    <li class="item" style="height: 200px"></li>
    <li class="item" style="height: 190px"></li>
    <li class="item" style="height: 120px"></li>
  </ul>
</template>
