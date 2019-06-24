const state = () => ({
  sideBarIsActive: false,
});

const actions = {
  triggerSidebar: ({ commit }) => {
    commit('triggerSidebar');
  },
};

const mutations = {
  triggerSidebar(state) {
    state.sideBarIsActive = !state.sideBarIsActive;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
