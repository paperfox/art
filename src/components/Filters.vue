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
  { filterType: 'media', filterValue: 'watercolor', fitlerName: 'Watercolor' },
  { filterType: 'media', filterValue: 'ink', fitlerName: 'Ink' },
  { filterType: 'media', filterValue: 'printmaking', fitlerName: 'Printmaking' },
  { filterType: 'media', filterValue: 'digital', fitlerName: 'Digital' },
  { filterType: 'media', filterValue: 'painting', fitlerName: 'Acrylic/Oil' },
  { filterType: 'media', filterValue: 'sculpture', fitlerName: 'Sculpture' },
  { filterType: 'content', filterValue: 'animal', fitlerName: 'Animal' },
  { filterType: 'content', filterValue: 'fanart', fitlerName: 'Fan Art' },
  { filterType: 'content', filterValue: 'fantasy', fitlerName: 'Fantasy' },
  { filterType: 'content', filterValue: 'people', fitlerName: 'People' },
  { filterType: 'content', filterValue: 'plant', fitlerName: 'Plants' },
  { filterType: 'content', filterValue: 'vehicle', fitlerName: 'Vehicles' },
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
          {{ filter.fitlerName }}
        </button>
      </div>
    </details>
    <ArtLists :images="filteredArts" />
  </div>
</template>

<style scoped></style>
