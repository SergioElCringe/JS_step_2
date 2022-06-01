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
    },
    mutations: {
        writeCatalog(state, data) {
            state.catalogData = data;
        },
    },
    getters: {
        getItems(state) {
            return state.catalogData.items; 
        },
        getStickers(state) {
            return state.catalogData.stickerTypes;
        },
    }
}
