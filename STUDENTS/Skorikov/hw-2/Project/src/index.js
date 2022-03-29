import './styles/main_styles.css';
import Catalog from "./js/components/catalog";
import Cart from "./js/components/cart";
import Navigation from "./js/components/menu-nav";

// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
// import bootstrap from 'bootstrap'

const cart = new Cart();
const catalog = new Catalog();
const nav = new Navigation();

cart;
catalog;
nav;