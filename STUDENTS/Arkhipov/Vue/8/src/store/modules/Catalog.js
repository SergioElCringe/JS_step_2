import { catalog } from '@api';

export default {
	namespaced: true,
	state: () => ({
		items: [],
		product: null,
	}),

	actions: {
		async getCatalog({ commit }) {
			try {
				const data = await catalog.getCatalog();
				commit('setCatalogItems', data);
			}
			catch (err) {
				throw err;
			}
		},
		async getProduct({ commit }, id) {
			try {
				const data = await catalog.getProduct(id);
				commit('setProduct', data);
			}
			catch (err) {
				throw err;
			}
		},
	},
	mutations: {
		setCatalogItems(state, items) {
			state.items = items;
		},
		setProduct(state, item) {
			state.product = item;
		},
	},
	getters: {
		getItems(state) {
			return state.items;
		},
	},
}