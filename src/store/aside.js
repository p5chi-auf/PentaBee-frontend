const state = () => ({
  sideBarIsActive: true,
});

const actions = {
  triggerSidebar: ({ commit }) => {
    commit('triggerSidebar');
  },
  setSidebarState: ({ commit }, payload) => {
    commit('setSidebarState', payload);
  }
};

const mutations = {
  triggerSidebar(state) {
    state.sideBarIsActive = !state.sideBarIsActive;
  },
  setSidebarState(state, payload) {
    state.sideBarIsActive = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
