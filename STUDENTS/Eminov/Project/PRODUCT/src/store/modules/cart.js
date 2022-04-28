export default {
    namespaced: true,
    state: () => ({
        items: [],
        shippingMethod: {
            name: 'Personal pickup',
            price: 0,
        },
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

        setShippingMethod(state, method) {
            state.shippingMethod = method;
        },
    },

    actions: {
        async getCart({ commit }, url) {
            try {
                const data = await $api.send(url, 'GET');
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
                    const data = await $api.send(val.api, 'POST', newItem);

                    if (!data.error) {
                        commit('setNewItem', newItem);
                    };
                } catch (err) {
                    throw err;
                };
            };
        },

        async changeItem({ state, commit, dispatch }, val) {
            const { id, amount, price } = val.changes;
            const findItem = state.items.find(item => item.id === id);

            try {
                const data = await $api.send(val.api + `/${id}`, 'PUT', { amount, price });

                if (!data.error) {
                    if (amount === -1 && findItem.amount === 1) {
                        await dispatch('deleteItem', id);
                    } else {
                        commit('setChangeItem', { id, amount, price });
                    };
                };
            } catch (err) {
                throw err;
            };
        },
    },
};