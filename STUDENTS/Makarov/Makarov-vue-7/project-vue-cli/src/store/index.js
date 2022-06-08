import { createStore } from 'vuex'

import Catalog from './modules/catalog.js';
import Cart from './modules/cart.js';
import Search from './modules/search.js';
import SideMenu from './modules/sideMenu.js';
import Nav from './modules/nav.js';
import Order from './modules/order.js';

export default createStore({
  modules: { Catalog, Cart, Search, SideMenu, Nav, Order },
});
