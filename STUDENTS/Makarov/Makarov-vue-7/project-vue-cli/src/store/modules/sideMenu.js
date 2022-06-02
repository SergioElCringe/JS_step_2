export default {
    namespaced: true,
    state: () => ({
        sideMenuToggle: false
    }),
    actions: {
        toggleSideMenu({ commit }) {
            commit('toggleSideMenu');
        },
    },
    mutations: {
        toggleSideMenu(state) {
            state.sideMenuToggle = !state.sideMenuToggle;
        },
    },
    getters: {
        sideMenuToggle(state) {
            return state.sideMenuToggle; 
        },
    }
}
