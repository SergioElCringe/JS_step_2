import { menu } from '@api';

export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),

    mutations: {
        setMenu(state, data) {
            state.items = data;
        },
    },

    actions: {
        async getMenu({ commit }) {
            try {
                const data = await menu.getMenu();
                commit('setMenu', data);
            } catch (err) {
                throw err;
            };
        },
    },
};