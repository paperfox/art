<script setup>
import { ref, computed } from 'vue';
import artwork from '../data/artData';
import ArtLists from './ArtLists.vue';

// Props
const props = defineProps({
  artwork: {
    type: Array,
    required: true,
  },
});

// Reactive state
const activeFilter = ref(null);
const activeClasses = ref({});

// Filter buttons
const filterButtons = [
  { filterType: 'media', filterValue: 'watercolor' },
  { filterType: 'media', filterValue: 'ink' },
  { filterType: 'media', filterValue: 'printmaking' },
  { filterType: 'media', filterValue: 'painting' },
  { filterType: 'content', filterValue: 'animal' },
  { filterType: 'content', filterValue: 'fanart' },
  { filterType: 'content', filterValue: 'fantasy' },
  { filterType: 'content', filterValue: 'people' },
  { filterType: 'content', filterValue: 'plant' },
  { filterType: 'content', filterValue: 'vehicle' },
];

// Computed property for filters
const filteredArts = computed(() => {
  if (!activeFilter.value) {
    return artwork;
  }
  return artwork.filter((art) => art[activeFilter.value.filterType].includes(activeFilter.value.filterValue));
});

// Method to apply filter
const applyFilter = (filter) => {
  activeFilter.value = filter;
  activeClasses.value[filter.filterValue] = !activeClasses.value[filter.filterValue];
  // Reset all inactive filters - remove this once I can apply multiple filters
  filterButtons.forEach((btn) => {
    if (btn.filterValue !== filter.filterValue) {
      activeClasses.value[btn.filterValue] = false;
    }
  });
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
          :class="{ 'active-filters': activeClasses[filter.filterValue] }"
          @click="applyFilter(filter)"
        >
          {{ filter.filterValue }}
        </button>
      </div>
    </details>
    <ArtLists :images="filteredArts" />
  </div>
</template>

<style scoped></style>
