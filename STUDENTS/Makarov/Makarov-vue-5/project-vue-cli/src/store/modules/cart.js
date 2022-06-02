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
                const data = await $api.send('/api/cart', 'GET');
                commit('writeCart', data);
            }
            catch (err) {
                throw err;
            }
        },

        async removeItem({ commit }, item) {
            try {
                const response = await $api.send(`/api/cart/${item.id}`, 'DELETE');
                if (response) {
                    commit('deleteCartItem', item);
                }
            }
            catch (err) {
                throw err;
            }
        },

        async incrementItemAmount({ commit }, item) {
            try {
                const body = JSON.stringify({ value: 1 });
                const response = await $api.send(`/api/cart/${item.id}`, 'PUT', body);
                if (response) {
                    commit('incrementCartItem', item);
                }
            }
            catch (err) {
                throw err;
            }
        },

        async decrementItemAmount({ commit }, item) {
            try {
                const body = JSON.stringify({ value: -1 });
                const response = await $api.send(`/api/cart/${item.id}`, 'PUT', body);
                if (response) {
                    commit('decrementCartItem', item);
                }
            }
            catch (err) {
                throw err;
            }
        },

        async addItem({ commit }, item) {
            try {
                const body = JSON.stringify({ id: item.id });
                const response = await $api.send(`/api/catalog/${item.id}`, 'POST', body);
                if (response) {
                    commit('addCartItem', item);
                }
            }
            catch (err) {
                throw err;
            }
        }


    },
    mutations: {
        writeCart(state, data) {
            state.cart = data;
        },

        deleteCartItem(state, item) {
            state.cart.items = state.cart.items.filter(el => el.id !== item.id);
        },

        incrementCartItem(state, item) {
            state.cart.items.find(el => el.id === item.id).amount++;
        },

        decrementCartItem(state, item) {
            if (item.amount > 1) {
                state.cart.items.find(el => el.id === item.id).amount--;
            } else {
                state.cart.items = state.cart.items.filter(el => el.id !== item.id);
            }
        },

        addCartItem(state, item) {
            const cartItem = state.cart.items.find(el => el.id === item.id);
            if (cartItem) {
                cartItem.amount++;
            } else {
                state.cart.items.push(item);
            }
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
