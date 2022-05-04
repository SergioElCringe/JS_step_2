import { cart } from '@api';

export default {
    namespaced: true,
    state: () => ({
        items: [],
        shippingMethod: {},
    }),

    getters: {
        totalCount(state) {
            return state.items.reduce((acc, item) => {
                return acc += item.amount;
            }, 0);
        },

        totalPrice(state) {
            return state.items.reduce((acc, item) => {
                return acc += (item.price * item.amount);
            }, 0);
        },

        total(state, getters) {
            return getters.totalPrice + (state.shippingMethod?.price || 0);
        },
    },

    mutations: {
        setCart(state, data) {
            state.items = data.items;
        },

        setAddItem(state, item) {
            state.items.push(item);
        },

        setIncrementAmount(state, val) {
            const { id, amount } = val;
            const findItem = state.items.find(item => item.id === id);
            findItem.amount += amount;
        },

        setDeleteItem(state, val) {
            const { id } = val;
            const findItem = state.items.find(item => item.id === id);
            const index = state.items.indexOf(findItem);
            state.items.splice(index, 1);
        },

        setShippingMethod(state, method) {
            state.shippingMethod = method;
        },

        setClearCart(state) {
            state.items = [];
        },
    },

    actions: {
        async getCart({ commit }) {
            try {
                const data = await cart.getCart();
                commit('setCart', data);
            } catch (err) {
                throw err;
            };
        },

        async addItem({ state, commit }, val) {
            const { id, name, price, imgUrl, amount = 1 } = val.item;
            const findItem = state.items.find(item => item.id === id);

            if (!findItem) {
                try {
                    const newItem = { id, imgUrl: imgUrl[0], name, price, amount };
                    const data = await cart.addItem(newItem);

                    if (!data.error) {
                        commit('setAddItem', newItem);
                    };
                } catch (err) {
                    throw err;
                };
            };
        },

        async incrementAmount({ commit }, val) {
            try {
                const data = await cart.incrementAmount(val)

                if (!data.error) {
                    commit('setIncrementAmount', val);
                };
            } catch (err) {
                throw err;
            };
        },

        async deleteItem({ commit }, val) {
            try {
                const data = cart.deleteItem(val);
                if (!data.error) {
                    commit('setDeleteItem', val);
                };
            } catch (err) {
                throw err;
            };
        },

        async clearCart({ commit }, val) {
            try {
                await cart.deleteItem(val);
                commit('setClearCart');
            } catch (err) {
                throw err;
            };
        },
    },
};