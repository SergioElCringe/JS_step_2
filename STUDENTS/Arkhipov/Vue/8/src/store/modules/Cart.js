export default {
	namespaced: true,
	state: () => ({
		data: null,
	}),

	actions: {
		async getCart({ commit }, url) {
			try {
				const data = await $api.send(url, 'GET');
				commit('setCartData', data);
			}
			catch (err) {
				throw err;
			}
		},
	},
	mutations: {
		setCartData(state, data) {
			state.data = data; //сомнения

		}
	},
	getters: {
		getData(state) {
			return state.data;
		},
	},
}