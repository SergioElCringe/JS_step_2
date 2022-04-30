import './src/styles/contact_responsive.css'
import './src/styles/responsive.css'
import './src/styles/product.css'
import './src/styles/product_responsive.css'
import './src/styles/main_styles.css'
import './src/styles/contact.css'
import './src/styles/checkout.css'
import './src/styles/checkout_responsive.css'
import './src/styles/categories.css'
import './src/styles/categories_responsive.css'
import './src/styles/cart.css'
import './src/styles/cart_responsive.css'
import './src/styles/f-a/css/font-awesome.min.css'

// const app = require('./src/js/components/app')
// const cart = require('./src/js/components/cart');
// const catalog = require('./src/js/components/catalog');
// const navigation = require('./src/js/components/topNav');
// import app from "./src/js/components/app";
import Cart from "./src/js/components/cart";
import Catalog from "./src/js/components/catalog";
import Navigation from "./src/js/components/topNav";

const cart = new Cart();
const catalog = new Catalog(cart);
const navigation = new Navigation();

cart;
catalog;
navigation;

// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
// import catalog from './src/js/components/catalog'
// import bootstrap from 'bootstrap'

// app();