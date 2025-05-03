<script setup>
import { ref } from 'vue';
import FormInput from './FormInput.vue';
import SocialLinks from './SocialLinks.vue';

const formElements = ref([
  {
    id: 'input-name',
    componentType: 'input',
    name: 'name',
    type: 'text',
    labelText: 'Name',
    placeholder: 'Name',
    isRequired: true,
    isError: false,
    modelValue: '',
  },
  {
    id: 'input-email',
    componentType: 'input',
    name: 'email',
    type: 'email',
    labelText: 'Email',
    placeholder: 'Email',
    isRequired: true,
    isError: false,
    modelValue: '',
  },
  {
    id: 'input-subject',
    componentType: 'input',
    name: 'subject',
    type: 'text',
    labelText: 'Subject',
    placeholder: 'Subject',
    isRequired: true,
    isError: false,
    modelValue: '',
  },
  {
    id: 'input-message',
    componentType: 'textarea',
    name: 'message',
    type: 'textarea',
    labelText: 'Message',
    placeholder: 'Message',
    isRequired: true,
    isError: false,
    modelValue: '',
  },
]);

const isSubmitting = ref(false);

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const handleSubmit = () => {
  const isValid = validateInputs();
  if (!isValid) {
    return;
  }

  console.log(formElements.value);
  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
    alert("Thanks for testing but this doesn't actually do anything <3");
  }, 2000);
};

const validateInputs = () => {
  let isValid = true;

  formElements.value = formElements.value.map((element) => {
    if (
      (element.isRequired && !element.modelValue.trim()) ||
      (element.name === 'email' && !isValidEmail(element.modelValue))
    ) {
      element.isError = true;
      isValid = false;
    } else {
      element.isError = false;
    }
    return element;
  });

  return isValid;
};
</script>

<template>
  <div class="text-content">
    <h1>Contact</h1>
    <div>
      <div>
        <p>You can find me on the web at these places, or drop me an email if you have specific questions.</p>
        <SocialLinks :showSocialTitles="true" />
      </div>
      <div>
        <form @submit.prevent="handleSubmit" novalidate>
          <p class="text-right">All fields are required.</p>
          <FormInput v-for="element in formElements" :key="element.id" v-bind="element" v-model="element.modelValue" />
          <button type="submit" class="btn-submit">
            {{ isSubmitting ? 'Sending' : 'Send' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: var(--xs-spacing);
  margin: var(--base-spacing) auto;
  max-width: 400px;

  .btn-submit {
    padding: 2rem;
    background: transparent;
    color: var(--text-body);
    font-weight: 600;
    border: 2px solid var(--text-body);
    margin-top: var(--base-spacing);

    &:hover {
      border-color: var(--link);
      background-color: var(--tertiary-bg);
      color: var(--link);
    }
  }
}

.text-right {
  text-align: right;
  margin: 0;
}
</style>
