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

const filterButtons = [
  { filterType: 'media', filterValue: 'watercolor', filterName: 'Watercolor' },
  { filterType: 'media', filterValue: 'ink', filterName: 'Ink' },
  { filterType: 'media', filterValue: 'micron pen', filterName: 'micron pen' },
  { filterType: 'media', filterValue: 'printmaking', filterName: 'Printmaking' },
  { filterType: 'media', filterValue: 'digital', filterName: 'Digital' },
];

const filteredArts = computed(() => {
  if (activeFilters.value.length === 0) {
    return artwork;
  }
  return artwork.filter((art) => {
    return activeFilters.value.every((filter) => {
      return art[filter.filterType].includes(filter.filterValue);
    });
  });
});

// Method to apply filter and toggle active button class
const applyFilter = (filter) => {
  const index = activeFilters.value.findIndex(
    (f) => f.filterType === filter.filterType && f.filterValue === filter.filterValue,
  );
  if (index === -1) {
    activeFilters.value.push(filter);
  } else {
    activeFilters.value.splice(index, 1);
  }
  activeFilterClass.value[filter.filterValue] = !activeFilterClass.value[filter.filterValue];
};
</script>

<template>
  <div class="artwork">
    <details>
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
      <p>Showing {{ filteredArts.length }} of {{ artwork.length }} art pieces</p>
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
  &&::marker {
    content: '';
  }
}

#filters {
  background-color: var(--tertiary-bg);
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  margin: 0 var(--base-spacing) var(--xs-spacing) 0;

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
