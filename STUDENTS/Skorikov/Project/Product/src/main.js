import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import RequestManager from './plugins/api/index';
import './assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css'
import './assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css'
import './assets/plugins/OwlCarousel2-2.2.1/animate.css'
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
import './assets/plugins/bootstrap4/bootstrap.min.css'

window.$api = new RequestManager();

createApp(App).use(store).use(router).mount('#app');
