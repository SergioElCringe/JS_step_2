import './assets/styles/main_styles.css';
import './assets/styles/responsive.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
