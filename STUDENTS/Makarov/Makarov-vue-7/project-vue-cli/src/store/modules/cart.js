import { cart } from '@api';

export default {
    namespaced: true,

    state: () => ({
        cartData: {
            items: [],
        },
    }),

    actions: {
        async getCart({ commit }) {
            try {
                // const data = await $api.send('/api/cart', 'GET');
                const data = await cart.getCart();
                commit('writeCart', data);
            }
            catch (err) {
                throw err;
            }
        },

        async removeItem({ commit }, item) {
            try {
                const response = await cart.removeItem(item.id);
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
                const response = await cart.incrementAmount(item.id, { value: 1});
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
                const response = await cart.incrementAmount(item.id, { value: -1});
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
                const response = await cart.addItem({ id: item.id });
                if (response) {
                    commit('addCartItem', item);
                }
            }
            catch (err) {
                throw err;
            }
        },

        async changeItemAmount({ commit, state }, pl) {
            const { item, value } = pl;
            try {
                const response = await cart.changeItemAmount(item.id, { value: value});
                if (response) {
                    commit('changeItemAmount', { item: item, value: value });
                }
            }
            catch (err) {
                throw err;
            }
        },


    },
    mutations: {
        writeCart(state, data) {
            state.cartData = data;
        },

        deleteCartItem(state, item) {
            state.cartData.items = state.cartData.items.filter(el => el.id !== item.id);
        },

        incrementCartItem(state, item) {
            state.cartData.items.find(el => el.id === item.id).amount++;
        },

        decrementCartItem(state, item) {
            if (item.amount > 1) {
                state.cartData.items.find(el => el.id === item.id).amount--;
            } else {
                state.cartData.items = state.cartData.items.filter(el => el.id !== item.id);
            }
        },

        addCartItem(state, item) {
            const cartItem = state.cartData.items.find(el => el.id === item.id);
            if (cartItem) {
                cartItem.amount++;
            } else {
                state.cartData.items.push(item);
            }
        },

        changeItemAmount(state, pl) {
            const { item, value } = pl;
            const cartItem = state.cartData.items.find(el => el.id === item.id);
            if (cartItem) {
                cartItem.amount += value;
            } else {
                item.amount = value;
                state.cartData.items.push(item);
            }
        }
    },

    getters: {
        getCartItems(state) {
            return state.cartData.items;
        },
        
        cartCounter(state) {
            return state.cartData.items.reduce((acc, cur) => acc + cur.amount, 0);
        },

    }
}
