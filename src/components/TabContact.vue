<script setup>
import { ref, watch } from 'vue';
import FormFields from './FormFields.vue';
import SocialLinks from './SocialLinks.vue';
import emailjs from '@emailjs/browser';

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
  {
    id: 'checkbox-newsletter',
    componentType: 'input',
    name: 'newsletter',
    type: 'checkbox',
    labelText: 'Subscribe to newsletter',
    placeholder: '',
    isRequired: false,
    isError: false,
    modelValue: false,
  },
]);

const isSubmitting = ref(false);
const success = ref(false);
const error = ref(false);

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
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

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const submitForm = async (event) => {
  error.value = false;

  const isValid = validateInputs();
  if (!isValid) {
    return;
  }

  try {
    isSubmitting.value = true;
    const token = await executeRecaptcha();

    // Data to EmailJS + token
    const templateParams = formElements.value.reduce((params, element) => {
      params[element.name] = element.modelValue;
      return params;
    }, {});

    // Add the reCAPTCHA token
    templateParams['g-recaptcha-response'] = token;

    // Send email with EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    success.value = true;

    setTimeout(() => {
      success.value = false;
    }, 3000);

    formElements.value.forEach((element) => {
      element.modelValue = '';
    });
  } catch (err) {
    console.error('Error submitting form:', err);
    error.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Trigger Google reCAPTCHA and get the token
const executeRecaptcha = () => {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject('reCAPTCHA not loaded');
      return;
    }

    // Execute the invisible reCAPTCHA
    window.grecaptcha
      .execute(import.meta.env.VITE_YOUR_SITE_KEY, { action: 'submit' })
      .then((token) => {
        resolve(token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

watch(
  formElements,
  () => {
    error.value = false;
  },
  { deep: true },
);
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
        <form @submit.prevent="submitForm(formElements)" novalidate id="contact-form">
          <p class="text-right">All fields are required.</p>
          <FormFields v-for="element in formElements" :key="element.id" v-bind="element" v-model="element.modelValue" />
          <p v-if="success">Message sent! <br />Thanks for reaching out, I'll get back to you shortly.</p>
          <button type="submit" class="btn-submit">
            {{ isSubmitting ? 'Sending' : 'SEND' }}
          </button>
          <p role="alert" class="form-error">
            <span class="form-error" v-if="error">Error sending message. Please try again.</span>
          </p>
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
  max-width: 55rem;

  .btn-submit {
    padding: 2rem;
    background: transparent;
    color: var(--text-body);
    font-weight: 600;
    border: var(--border-weight) solid var(--text-body);
    margin-top: var(--xs-spacing);

    &:hover {
      border-color: var(--link);
      background-color: var(--secondary-bg);
      color: var(--link);
    }
  }
}

.text-right {
  text-align: right;
  margin: 0;
}
</style>
