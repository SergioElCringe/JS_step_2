import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
require("babel-polyfill");

import { createApp } from 'vue';
import vueApp from './vueApp.vue';

const myApp = createApp(vueApp).mount('#vueApp');