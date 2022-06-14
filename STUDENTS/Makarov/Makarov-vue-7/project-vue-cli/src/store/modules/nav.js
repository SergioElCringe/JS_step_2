import { nav } from '@api';

export default {
  namespaced: true,
  state: () => ({
    navData: { },
  }),
  actions: {
    async getNav({ commit }) {
      try {
        const data = await nav.getNav();
        commit('writeNav', data);
      }
      catch (err) {
        throw err;
      }
    },
  },
  mutations: {
    writeNav(state, data) {
      state.navData = data;
    },
  },
  getters: {
    navItems(state) {
      return state.navData || false;
    }
  }
}
