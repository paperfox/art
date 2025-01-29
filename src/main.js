import { createApp } from 'vue';
import './style.css';
// import './yellow-theme.css';
// import './blue-theme.css';
import App from './App.vue';
import { setTheme } from './utils/theme';

setTheme('blue');

// document.body.dataset.theme = 'yellow';

createApp(App).mount('#app');
