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

<style scoped>
.form-input {
  display: flex;
  flex-direction: column;
  position: relative;

  margin-top: 2rem;

  label {
    position: absolute;
    top: 1.4rem;
    left: 1.6rem;
    transition: all 0.4s ease;
  }

  .float,
  &:focus-within label {
    position: absolute;
    top: -2.5rem;
    left: 0;
  }
}

input,
textarea {
  font-family: inherit;
  padding: var(--xs-spacing);
  border: 0;
  border-bottom: var(--border-weight) solid var(--text-body);
  font-size: 1.6rem;
  color: var(--text-body);
  background-color: var(--secondary-bg);

  &:focus {
    outline: none;
    border-bottom-color: var(--link);
  }
}
</style>
