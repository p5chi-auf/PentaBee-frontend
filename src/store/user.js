const state = () => ({
  user: null,
  token: null,
  id: null
});

const actions = {
  login: ({ dispatch }, token) => {
    dispatch('setToken', token);
  },
  logout: ({ dispatch }) => {
    // window.localStorage.removeItem('token');
    dispatch('setToken', null);
  },
  setUser: ({ commit }, payload) => {
    commit('setUser', payload);
  },
  setToken: ({ commit }, token) => {
    commit('setToken', token);
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setToken(state, token) {
    state.token = token;
  },
};

const getters = {
  isAuth: state => {
    return !!state.token;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
