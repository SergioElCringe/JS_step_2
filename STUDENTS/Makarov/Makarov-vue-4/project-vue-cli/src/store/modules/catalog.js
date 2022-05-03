export default {
    namespaced: true,
    state: () => ({
        catalog: {
            items: [],
            styckerTypes: [],
        },
    }),
    actions: {
        async getCatalog({ commit }) {
            try {
                const data = await $api.send('/api/catalog');
                commit('writeCatalog', data);
            }
            catch (err) {
                throw err;
            }
        },
    },
    mutations: {
        writeCatalog(state, data) {
            state.catalog = data;
        },
    },
    getters: {
        getItems(state) {
            return state.catalog.items; 
        },
        getStickers(state) {
            return state.catalog.stickerTypes;
        },
    }
}
