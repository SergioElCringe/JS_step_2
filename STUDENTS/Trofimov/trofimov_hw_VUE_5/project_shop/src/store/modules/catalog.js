export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),

    actions: {
        async getCatalog({ commit }, url) {
            try {
                const data = await $api.send(url, 'GET');
                commit('setCatalogItems', data);
            } catch(err) {
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
};