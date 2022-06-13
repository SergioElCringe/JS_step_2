import { createStore } from 'vuex'


import Catalog from './modules/catalog'
import Cart from './modules/cart'
import Pagination from './modules/pagination'



export default createStore ({
  modules: {
    Catalog,
    Cart,
    Pagination
  }
})