export default {
    namespaced: true,
    state: () => ({
        cart: {
            items: [],
        },
    }),
    actions: {
        async getCart({ commit }) {
            try {
                const data = await $api.send('/api/cart');
                commit('writeCart', data);
            }
            catch (err) {
                throw err;
            }

        }
    },
    mutations: {
        writeCart(state, data) {
            state.cart = data;
        }
    },
    getters: {
        getCartItems(state) {
            return state.cart.items;
        },
        cartCounter(state) {
            return state.cart.items.length;
        }
    }
}
