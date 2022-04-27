export default {
    namespaced: true,
    state: () => ({
        items: [],
        selectedMethod: {},
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

        shipping(state) {
            return Object.keys(state.selectedMethod).length ? (+state.selectedMethod.price) : 0;
        },

        cheque(state, getters) {
            return getters.totalPrice + getters.shipping;
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
            const { id, amount, price } = val;
            const findItem = state.items.find(item => item.id == id);
            findItem.amount += amount;
            findItem.totalPrice += price;
        },

        setSelectMethod(state, method) {
            state.selectedMethod = method;
        },
    },

    actions: {
        async getCart({ commit }, url) {
            try {
                const data = await $api.send(url, 'GET');
                commit('setCart', data);
            } catch (err) {
                console.warn(err);
            };
        },

        async getNewItem({ state, commit }, val) {
            const findItem = state.items.find(item => item.id == val.item.id);

            if (!findItem) {
                try {
                    const data = await $api.send(val.api, 'POST', val.item);

                    if (!data.error) {
                        commit('setNewItem', val);
                    };
                } catch (err) {
                    console.warn(err);
                };
            };
        },

        async changeItem({ state, commit, dispatch }, val) {
            const { id, amount, price } = val.changes;
            const findItem = state.items.find(item => item.id == id);

            try {
                const data = await $api.send(val.api + `/${id}`, 'PUT', { amount, price });

                if (!data.error) {
                    if (amount == -1 && findItem.amount == 1) {
                        await dispatch('deleteItem', id);
                    } else {
                        commit('setChangeItem', { id, amount, price });
                    };
                };
            } catch (err) {
                console.warn(err);
            };
        },

        getSelectMethod({ commit }, method) {
            commit('setSelectMethod', method);
        },
    },
};