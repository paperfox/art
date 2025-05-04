import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useReCaptcha } from 'vue-recaptcha-v3';

const app = createApp(App);

app.use(useReCaptcha, {
  siteKey: import.meta.env.VITE_YOUR_SITE_KEY, // Replace with your reCAPTCHA site key
});

app.mount('#app');
