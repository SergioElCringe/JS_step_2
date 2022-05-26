import  { catalog }  from "@api";
export default {
    namespaced: true,
    state: () => ({
      items: [],
      product: null,
      valueProduct: 1,
    }),

    actions: {
      async getCatalog({ commit } , parametres = null) {
        try {
          const {data , pagination: {total} } = await catalog.getCatalog(parametres);
          commit('setCatalogItems', data);
          commit('Pagination/setTotal', total, {root:true});
        }
        catch(err) {
          throw err;
        }
      },
      async getProduct({ commit , state}, id) {
        try {
          const data = await catalog.getProduct(id);
          commit('setProduct', data);
          state.valueProduct = 1;
        }
        catch(err) {
          throw err;
        }
      },
      downValue({ commit,state }) {
        if(state.valueProduct > 1) {
          commit('setDownValue');

        }
      },
      upValue({ commit }) {
        commit('setUpValue');
      }
    },

    mutations: {
      setUpValue(state) {
        state.valueProduct++
        state.product.Productvalue = state.valueProduct
      },
      setDownValue(state) {
        state.valueProduct--
        state.product.Productvalue = state.valueProduct
      },
      setCatalogItems(state, items) {
        state.items = items;
      },
      setProduct(state, item) {
        state.product = item;
      },
    },

    getters: {
      items(state) {
        return state.items;
      },
    },
  }