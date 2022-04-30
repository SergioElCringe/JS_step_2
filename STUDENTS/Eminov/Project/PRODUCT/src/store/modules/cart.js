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
                return acc += item.totalPrice;
            }, 0);
        },

        cheque(state, getters) {
            return getters.totalPrice + state.shippingMethod.price;
        },
    },

    mutations: {
        setCart(state, data) {
            state.items = data.items;
        },

        setNewItem(state, item) {
            state.items.push(item);
        },

        setChangeItem(state, val) {
            const findItem = state.items.find(item => item.id === val.id);
            findItem.amount += val.amount;
            findItem.totalPrice += val.price;
        },

        setDeleteItem(state, val) {
            const findItem = state.items.find(item => item.id === val);
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
                const data = await cart.increment();
                commit('setCart', data);
            } catch (err) {
                throw err;
            };
        },

        async getNewItem({ state, commit }, val) {
            const { id, name, price, imgUrl, amount = 1, totalPrice = (price * amount) } = val.item;
            const findItem = state.items.find(item => item.id === id);

            if (!findItem) {
                try {
                    const newItem = { id, imgUrl, name, price, totalPrice, amount };
                    const data = await cart.increment('POST', newItem);

                    if (!data.error) {
                        commit('setNewItem', newItem);
                    };
                } catch (err) {
                    throw err;
                };
            };
        },

        async changeItem({ state, commit, dispatch }, val) {
            const { id, amount, price } = val;
            const findItem = state.items.find(item => item.id === id);

            try {
                const changeableItem = { id, amount, price };
                const data = await cart.increment('PUT', changeableItem)

                if (!data.error) {
                    if (amount === -1 && findItem.amount === 1) {
                        await dispatch('deleteItem', id);
                    } else {
                        commit('setChangeItem', changeableItem);
                    };
                };
            } catch (err) {
                throw err;
            };
        },

        async deleteItem({ commit }, val) {
            try {
                const data = cart.increment('DELETE', val);

                if (!data.error) {
                    commit('setDeleteItem', val);
                };
            } catch (err) {
                throw err;
            };
        },

        async getClearCart({ commit }, val) {
            try {
                await cart.increment('DELETE', val);
                commit('setClearCart');
            } catch (err) {
                throw err;
            };
        },
    },
};