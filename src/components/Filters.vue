<script setup>
import { ref } from "vue";
const activeFilters = ref([]);
// filter art based on if media or content includes filters
</script>

<template>
  <details>
    <summary>Filters</summary>
    <div class="filters">
      <div>
        <h3>Media</h3>
        <div class="categories">
          <label class="btn-badge">
            <input type="checkbox" value="watercolor" v-model="activeFilters" />
            Watercolor
          </label>
          <label class="btn-badge">
            <input type="checkbox" value="ink" v-model="activeFilters" />
            Ink
          </label>
          <label class="btn-badge">
            <input
              type="checkbox"
              value="printmaking"
              v-model="activeFilters"
            />
            Printmaking
          </label>
          <label class="btn-badge">
            <input type="checkbox" value="painting" v-model="activeFilters" />
            Acrylic/Oil
          </label>
        </div>
      </div>
      <div>
        <h3>Subject</h3>
        <div class="categories">
          <button class="btn-badge" type="button" id="filter-animals">
            Animals
          </button>
          <button class="btn-badge" type="button" id="filter-fantasy">
            Fantasy
          </button>
          <button class="btn-badge" type="button" id="filter-fanart">
            Fan Art
          </button>
          <button class="btn-badge" type="button" id="filter-people">
            People
          </button>
          <button class="btn-badge" type="button" id="filter-plants">
            Plants
          </button>
          <button class="btn-badge" type="button" id="filter-vehicles">
            Vehicles
          </button>
        </div>
      </div>
    </div>
    <div>
      {{ activeFilters }}
    </div>
  </details>
</template>

<style scoped></style>
