<script setup>
import { ref } from 'vue';

const props = defineProps({
  componentType: {
    type: String,
    default: 'input',
  },
  id: {
    type: String,
    required: true,
  },
  isError: {
    type: Boolean,
    default: false,
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
  placeholder: {
    type: String,
    default: null,
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
const emailError = ref(false);

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
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
      oninvalid="setCustomValidity(' ');"
    />
    <div
      :class="
        isError && !modelValue ? 'form-error' : name === 'email' && !isValidEmail(modelValue) ? 'form-error' : null
      "
      role="alert"
    >
      <span v-if="isError && !modelValue">Please enter {{ name === 'email' ? 'an' : 'a' }} {{ name }}.</span>
      <span v-else-if="modelValue && name === 'email' && !isValidEmail(modelValue)">Please enter a valid email.</span>
    </div>
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

  .float,
  &:focus-within label {
    position: absolute;
    top: -2.5rem;
    left: 0;
  }
}

.form-error {
  color: red;
  margin-top: var(--base-spacing);
}
</style>
