import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue';
import vueApp from './vueApp.vue';

require("babel-polyfill");

const myApp = createApp(vueApp).mount('#vueApp'); 