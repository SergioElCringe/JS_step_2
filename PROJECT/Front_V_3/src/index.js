import './styles/cart_responsive.css'
import './styles/cart.css'
import './styles/categories_responsive.css'
import './styles/categories.css'
import './styles/checkout_responsive.css'
import './styles/checkout.css'
import './styles/contact_responsive.css'
import './styles/contact.css'
import './styles/main_styles.css'
import './styles/product_responsive.css'
import './styles/product.css'
import './styles/responsive.css'
import './styles/f-a/css/font-awesome.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'

// import RequestManager from './js/components/api';
// const $api = new RequestManager();

import { createApp } from 'vue';
import app from './app.vue';

const myApp = createApp(app).mount('#app');
// myApp.$api = request;

// myApp.provide('$api', request);
