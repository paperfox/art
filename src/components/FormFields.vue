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
    type: [String, Boolean],
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
  <div :class="type === 'checkbox' ? 'form-checkbox' : 'form-input'">
    <label
      :for="id"
      :class="[{ float: modelValue && type != 'checkbox' }, { checked: modelValue && type === 'checkbox' }]"
      >{{ labelText }}
    </label>
    <input
      v-if="type === 'checkbox'"
      type="checkbox"
      :id="id"
      :name="name"
      :checked="modelValue"
      class="visually-hidden"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <component
      v-else
      :is="componentType"
      :type="type"
      :id="id"
      :name="name"
      :required="isRequired"
      :rows="componentType === 'textarea' ? 6 : null"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
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
    border-radius: 0;
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

.form-checkbox {
  margin-top: 2rem;

  label:before {
    content: '';
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border: var(--border-weight) solid var(--text-body);
    border-radius: 0;
    margin-right: 1rem;
    vertical-align: middle;
  }

  label.checked:before {
    border-color: var(--link);
    background-color: var(--link);
    content: '❤';
    color: var(--main-bg);
    text-align: center;
  }
}

.required {
  color: var(--link);
}

@media (prefers-color-scheme: dark) {
  input {
    color-scheme: dark;
  }
}
</style>
