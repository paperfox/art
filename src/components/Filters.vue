<script setup>
import { ref, computed } from 'vue';
import artwork from '../data/artData';
import ArtLists from './ArtLists.vue';

const props = defineProps({
  artwork: {
    type: Array,
    required: true,
  },
});

const activeFilters = ref([{ filterType: 'featured', filterValue: 'true', filterName: 'Featured' }]);
const activeFilterClass = ref({
  true: true, // featured selected by default - this naming is confusing
});

// Filter buttons
const filterButtons = [
  { filterType: 'featured', filterValue: 'true', filterName: 'Featured' },
  { filterType: 'media', filterValue: 'watercolor', filterName: 'Watercolor' },
  { filterType: 'media', filterValue: 'ink', filterName: 'Ink' },
  { filterType: 'media', filterValue: 'printmaking', filterName: 'Printmaking' },
  { filterType: 'media', filterValue: 'digital', filterName: 'Digital' },
  { filterType: 'media', filterValue: 'painting', filterName: 'Acrylic/Oil' },
  { filterType: 'media', filterValue: 'sculpture', filterName: 'Sculpture' },
  { filterType: 'content', filterValue: 'animal', filterName: 'Animal' },
  { filterType: 'content', filterValue: 'fanart', filterName: 'Fan Art' },
  { filterType: 'content', filterValue: 'fantasy', filterName: 'Fantasy' },
  { filterType: 'content', filterValue: 'people', filterName: 'People' },
  { filterType: 'content', filterValue: 'plant', filterName: 'Plants' },
  { filterType: 'content', filterValue: 'vehicle', filterName: 'Vehicles' },
];

// Computed property for filters
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
  <div>
    <details>
      <summary>Filters</summary>
      <div id="filters">
        <button
          v-for="filter in filterButtons"
          :key="filter.filterValue"
          class="btn-badge"
          :class="{ 'active-filters': activeFilterClass[filter.filterValue] }"
          @click="applyFilter(filter)"
        >
          {{ filter.filterName }}
        </button>
      </div>
    </details>
    <ArtLists :images="filteredArts" />
  </div>
</template>

<style scoped></style>
