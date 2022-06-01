export default {
	namespaced: true,
	state: () => ({
		items: [],
	}),

	actions: {
		async getMenu({ commit }, url) {
			try {
				const data = await $api.send(url, 'GET');
				commit('setMenuItems', data);
			}
			catch (err) {
				throw err;
			}
		},
	},
	mutations: {
		setMenuItems(state, items) {
			state.items = items;
		},
	},
	getters: {
		getItems(state) {
			return state.items;
		},
	},
}