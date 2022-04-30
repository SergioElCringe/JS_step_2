import { shippingMethods } from '@api';

export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),

    mutations: {
        setMethods(state, data) {
            state.items = data;
        },
    },

    actions: {
        async getMethods({ commit }) {
            try {
                const data = await shippingMethods.getMethods();
                commit('setMethods', data);
            } catch (err) {
                throw err;
            };
        },
    },
};