import { createStore } from 'vuex'

import Catalog from './modules/catalog.js';
import Cart from './modules/cart.js';

export default createStore({
  modules: { Catalog, Cart },
});
