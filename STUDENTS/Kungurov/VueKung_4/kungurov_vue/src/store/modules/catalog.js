import  { catalog }  from "@api";
export default {
    namespaced: true,
    state: () => ({
      items: [],
    }),
  
    actions: {
      async getCatalog({ commit }) {
        try {
          const data = await catalog.getCatalog();
          commit('setCatalogItems', data);
        }
        catch(err) {
          throw err;
        }
      },
    },
  
    mutations: {
      setCatalogItems(state, items) {
        state.items = items;
      },
    },
  
    getters: {
      itemsMain(state) {
        return state.items.filter(el => !!el.category);
      },
    },
  }