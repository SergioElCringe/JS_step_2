import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     catalogItems: [],
//   },
//   getters: {
//     catalogForMain(state) {
//       return state.catalogItems.filter(el => !!el.category);
//     }
//   },
//   mutations: {
//     setCatalogItems(state, items) {
//       state.catalogItems = items;
//     }
//   },
//   actions: {
//     async getCatalog( {commit}, url) {
//       try {
//         const data = await $api.send(url, "GET");
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

export default createStore({
  modules: {
    Catalog,
  }
});
