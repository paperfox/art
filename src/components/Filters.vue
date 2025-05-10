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
  { filterType: 'media', filterValue: 'micron pen', filterName: 'micron pen' },
  { filterType: 'media', filterValue: 'printmaking', filterName: 'Printmaking' },
  { filterType: 'media', filterValue: 'digital', filterName: 'Digital' },
  { filterType: '', filterValue: 'clear', filterName: 'Clear filters' },
];

const filteredArts = computed(() => {
  if (activeFilters.value.length === 0) {
    return artwork;
  }
  return artwork.filter((art) => {
    return art[activeFilters.value.filterType].includes(activeFilters.value.filterValue);
  });
});

const applyFilter = (filter) => {
  if (filter.filterValue === 'clear') {
    activeFilters.value = [];
    activeFilterClass.value = {};
  } else if (activeFilters.value === filter) {
    activeFilters.value = null;
    activeFilterClass.value[filter.filterValue] = false;
  } else {
    if (activeFilters.value) {
      activeFilterClass.value[activeFilters.value.filterValue] = false;
    }
    activeFilters.value = filter;
    activeFilterClass.value[filter.filterValue] = true;
  }
};
</script>

<template>
  <h1 class="visually-hidden">Artwork</h1>
  <div class="artwork">
    <details :aria-expanded="isDetailsOpen" @toggle="isDetailsOpen = $event.target.open">
      <summary>Filter Artwork</summary>
      <div id="filters">
        <button
          v-for="filter in filterButtons"
          :key="filter.filterValue"
          class="btn-badge"
          :class="[
            { 'active-filters': activeFilterClass[filter.filterValue] },
            { [filter.filterValue]: activeFilterClass[filter.filterValue] },
          ]"
          :id="`filter-${filter.filterValue}`"
          @click="applyFilter(filter)"
        >
          {{ filter.filterName }}
        </button>
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

  /* &::marker {
    content: '';
  } */
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
  padding: var(--base-spacing) var(--xs-spacing);
  letter-spacing: 0.1rem;

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

  &:focus-visible {
    outline: 0.2rem dotted var(--link);
    outline-offset: 0.2rem;
  }
}
</style>
