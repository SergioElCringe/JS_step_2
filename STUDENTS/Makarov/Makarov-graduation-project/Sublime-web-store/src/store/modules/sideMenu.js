export default {
  namespaced: true,
  state: () => ({
    sideMenuToggle: false
  }),
  actions: {
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu');
    },
    closeSideMenu({ commit }) {
      commit('closeSideMenu')
    }
  },
  mutations: {
    toggleSideMenu(state) {
      state.sideMenuToggle = !state.sideMenuToggle;
    },
    closeSideMenu(state) {
      state.sideMenuToggle = false;
    }
  },
  getters: {
    sideMenuToggle(state) {
      return state.sideMenuToggle; 
    },
  }
}
