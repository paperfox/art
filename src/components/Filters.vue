<script setup>
import { ref, computed } from 'vue';
import artwork from '../data/artData';
import ArtMasonry from './ArtMasonry.vue';

const props = defineProps({
  artwork: {
    type: Array,
  },
});

const activeFilters = ref([]);
const activeFilterClass = ref({});
const isDetailsOpen = ref(false);

const filterButtons = [
  { filterType: 'media', filterValue: 'watercolor', filterName: 'Watercolor & Ink' },
  { filterType: 'media', filterValue: 'micron pen', filterName: 'Micron Pen' },
  { filterType: 'media', filterValue: 'printmaking', filterName: 'Printmaking' },
  { filterType: 'media', filterValue: 'digital', filterName: 'Digital' },
  { filterType: '', filterValue: 'clear', filterName: 'No filters' },
];

activeFilters.value = filterButtons.find((filter) => filter.filterValue === 'clear');
activeFilterClass.value['clear'] = true;

const filteredArts = computed(() => {
  if (activeFilters.value.filterValue === 'clear') {
    return artwork;
  }
  return artwork.filter((art) => {
    return art[activeFilters.value.filterType]?.includes(activeFilters.value.filterValue);
  });
});

const applyFilter = (filter, event) => {
  if (filter.filterValue === 'clear') {
    activeFilters.value = filter;
    activeFilterClass.value = { clear: true };
  } else {
    activeFilters.value = filter;
    activeFilterClass.value = { [filter.filterValue]: true };
  }

  event.prevent.default();
  event.target.focus();
};
</script>

<template>
  <h1 class="visually-hidden">Artwork</h1>
  <div class="artwork">
    <details :aria-expanded="isDetailsOpen" @toggle="isDetailsOpen = $event.target.open">
      <summary>Filter Artwork</summary>
      <div id="filters">
        <div v-for="filter in filterButtons" :key="filter.filterValue">
          <input
            type="radio"
            :id="`filter-${filter.filterValue}`"
            name="filter"
            :value="filter.filterName"
            :checked="activeFilterClass[filter.filterValue] ? true : false"
            class="visually-hidden"
            @click="applyFilter(filter, $event)"
            :aria-label="filter.filterName"
          />
          <label
            :for="`filter-${filter.filterValue}`"
            class="btn-badge"
            :class="[
              { 'active-filters': activeFilterClass[filter.filterValue] },
              { [filter.filterValue]: activeFilterClass[filter.filterValue] },
            ]"
            >{{ filter.filterName }}</label
          >
        </div>
        <!-- <button
          v-for="filter in filterButtons"
          :key="filter.filterValue"
          class="btn-badge"
          :class="[
            { 'active-filters': activeFilterClass[filter.filterValue] },
            { [filter.filterValue]: activeFilterClass[filter.filterValue] },
          ]"
          :id="`filter-${filter.filterValue}`"
        >
          {{ filter.filterName }}
          <span class="visually-hidden" v-if="activeFilterClass[filter.filterValue]"> active</span>
        </button> -->
      </div>
      <!-- <p>Showing {{ filteredArts.length }} of {{ artwork.length }} art pieces</p> -->
    </details>
    <ArtMasonry :images="filteredArts" />
  </div>
</template>

<style scoped>
summary {
  cursor: pointer;
  padding-bottom: var(--base-spacing);
  margin-inline: auto;
  margin-bottom: var(--base-spacing);
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
}

#filters {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: var(--base-spacing);
}

.btn-badge {
  position: relative;
  border: 0.1rem solid var(--text-body);
  border-radius: 4rem;
  color: var(--text-body);
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: var(--base-spacing) var(--xs-spacing);

  &.active-filters {
    background-color: var(--text-body);
    color: var(--main-bg);
  }

  &:hover {
    color: var(--text-body);
    border-color: var(--link);

    &.active-filters {
      color: var(--main-bg);
    }
  }

  &:has(input:focus-visible) {
    outline: 0.2rem dotted var(--link);
    outline-offset: 0.2rem;
  }
}
</style>
