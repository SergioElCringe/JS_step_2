import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     // item: 0,
//     catalogItems: [],
//   },
//   getters: {
//     catalogForMain(state) {
//       return state.catalogItems.filter(el => !!el.category);
//     }
//   },
//   mutations: {
//     // increaseItem(state) {
//     //   state.item++;
//     // }
//     setCatalogItems(state, items) {
//       state.catalogItems = items;
//     }
//   },
//   actions: {
//     // pleaseIncreaseItem({ commit }) { //(store: { state, commit(), dispatch() })
//     //   commit('increaseItem');
//     // }
//     async getCatalog({ commit }, url) {
//       try {
//         const data = await $api.send(url, 'GET');
//         commit('setCatalogItems', data);
//       }
//       catch(err) {
//         throw err;
//       }
//     }
//   },
//   modules: {
//   }
// })
import Catalog from './modules/catalog';
import Pagination from './modules/pagination';

export default createStore({
  modules: {
    Catalog,
    Pagination,
  }
});