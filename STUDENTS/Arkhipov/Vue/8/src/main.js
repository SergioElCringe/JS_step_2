import './styles/main_styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import RequestManager from './plugins/api';

import axios from 'axios';

window.$api = new RequestManager();

createApp(App).use(store).use(router).mount('#app');
