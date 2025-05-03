<script setup>
import { computed } from 'vue';

const props = defineProps({
  componentType: {
    type: String,
    default: 'input',
  },
  id: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  labelText: {
    type: String,
    default: 'Label',
  },
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: null,
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="form-input">
    <label :for="id" :class="modelValue ? 'float' : null">{{ labelText }}</label>
    <component
      :is="componentType"
      :type="type"
      :id="id"
      :name="name"
      :required="isRequired"
      :rows="componentType === 'textarea' ? 6 : null"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
