export default {
    namespaced: true,
    state: () => ({
        searchToggle: false
    }),
    actions: {
        toggleSearch({ commit }) {
            commit('toggleSearch');
        },
    },
    mutations: {
        toggleSearch(state) {
            state.searchToggle = !state.searchToggle;
        },
    },
    getters: {
        searchToggle(state) {
            return state.searchToggle; 
        },
    }
}
