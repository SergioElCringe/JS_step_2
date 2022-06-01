import { catalog } from '@api';

export default {
    namespaced: true,
    state: () => ({
        catalogData: {
            items: [],
            styckerTypes: [],
        },
    }),
    actions: {
        async getCatalog({ commit }) {
            try {
                const data = await catalog.getCatalog();
                commit('writeCatalog', data);
            }
            catch (err) {
                throw err;
            }
        },
        async getProduct({ commit }, id) {
            try {
                const data = await catalog.getProduct(id);
                commit('writeProduct', data);
            } 
            catch (err) {
                throw err;
            }
        }
    },
    mutations: {
        writeCatalog(state, data) {
            state.catalogData = data;
        },
        writeProduct(state, data) {
            state.productData = data;
        }
    },
    getters: {
        getItems(state) {
            return state.catalogData.items; 
        },
        getStickers(state) {
            return state.catalogData.stickerTypes;
        },
        getProduct(state) {
            return state.productData;
        }
    }
}
