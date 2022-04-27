export default {
    namespaced: true,
    state: () => ({
        product: {},
    }),

    mutations: {
        setProduct(state, data) {
            state.product = data;
            state.product.amount = 1;
        },

        setIncrement(state, val) {
            state.product.amount += val;
        },
    },

    actions: {
        async getProduct({ commit }, val) {
            try {
                const data = await $api.send(val.api, 'GET');
                commit('setProduct', data.find(item => item.id == val.id));
            } catch (err) {
                console.warn(err);
            };
        },

        getIncrement({ commit }, val) {
            commit('setIncrement', val);    
        },
    },
};