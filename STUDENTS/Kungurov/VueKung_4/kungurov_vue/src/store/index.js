import { createStore } from 'vuex'


import Catalog from './modules/catalog'
import Cart from './modules/cart'



export default createStore ({
  modules: {
    Catalog,
    Cart
  }
})