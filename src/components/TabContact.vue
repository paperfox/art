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

console.log('Contact form elements:', formElements);
</script>

<template>
  <div class="text-content">
    <h3>Contact</h3>
    <div>
      <div>
        <p>
          You can find me on the web at these places, or drop me an email at
          <a href="mailto:art.paperfox+webcontact@gmail.com">art.paperfox@gmail.com</a> if you have specific questions.
        </p>
        <SocialLinks :showSocialTitles="true" />
      </div>
      <div>
        <form @submit.prevent="handleSubmit">
          <FormInput v-for="element in formElements" :key="element.id" v-bind="element" v-model="element.modelValue" />
          <button type="submit" class="btn-submit">Send</button>
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

  input,
  textarea {
    font-family: inherit;
    padding: var(--xs-spacing);
    border: 0;
    border-bottom: var(--border-weight) solid var(--text-body);
    font-size: 1.6rem;
    color: var(--text-body);
    background-color: var(--secondary-bg);
    margin-bottom: var(--xs-spacing);
  }
}
</style>
