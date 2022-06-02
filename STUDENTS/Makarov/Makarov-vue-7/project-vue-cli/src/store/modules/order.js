export default {
    namespaced: true,
    state: () => ({
        deliveryOptions: [
            {
                type: "Next day delivery",
                price: 4.99,
                checked: false,
            },
            {
                type: "Standard delivery",
                price: 1.99,
                checked: true,
            },
            {
                type: "Personal pickup",
                price: 0,
                checked: false,
            }
        ],
    }),
    actions: {
        selectDelivery({ commit }, type) {
            commit('selectDelivery', type);
        },
    },
    mutations: {
        selectDelivery(state, type) {
            state.deliveryOptions.forEach(el => el.type === type ? el.checked = true : el.checked = false);
        },
    },
    getters: {
        deliveryOptions(state) {
            return state.deliveryOptions; 
        },
        selectedDelivery(state) {
            return state.deliveryOptions.find(el => el.checked);
        }
    }
}