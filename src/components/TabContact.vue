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
    modelValue: null,
  },
  {
    id: 'input-email',
    componentType: 'input',
    name: 'email',
    type: 'email',
    labelText: 'Email',
    placeholder: 'Email',
    isRequired: true,
    modelValue: null,
  },
  {
    id: 'input-subject',
    componentType: 'input',
    name: 'subject',
    type: 'text',
    labelText: 'Subject',
    placeholder: 'Subject',
    isRequired: true,
    modelValue: null,
  },
  {
    id: 'input-message',
    componentType: 'textarea',
    name: 'message',
    type: 'textarea',
    labelText: 'Message',
    placeholder: 'Message',
    isRequired: true,
    modelValue: null,
  },
]);

const isSubmitting = ref(false);
const handleSubmit = () => {
  isSubmitting.value = true;
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    alert('Form submitted!');
  }, 2000);
};

console.log('Contact form elements:', formElements);
</script>

<template>
  <div class="text-content">
    <h3>Contact</h3>
    <div>
      <div>
        <p>You can find me on the web at these places, or drop me an email if you have specific questions.</p>
        <SocialLinks :showSocialTitles="true" />
      </div>
      <div>
        <form @submit.prevent="handleSubmit">
          <FormInput v-for="element in formElements" :key="element.id" v-bind="element" v-model="element.modelValue" />
          <button type="submit" class="btn-submit">{{ isSubmitting ? 'Sending' : 'Send' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>
