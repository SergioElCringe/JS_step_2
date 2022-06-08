export default {
	namespaced: true,
	state: () => ({
		total: 0,
	}),
	mutations: {
		setTotal(state, total) {
			state.total = total;
		},
	},
}