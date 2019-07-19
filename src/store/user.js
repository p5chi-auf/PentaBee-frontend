const state = () => ({
  user: null,
  token: localStorage.getItem('token') || '',
  idUser: null
});

const actions = {
  login: ({ dispatch }, token) => {
    dispatch('setToken', token);
  },
  logout: ({ dispatch }) => {
    dispatch('setToken', null);
  },
  setUser: ({ commit }, idUser) => {
    commit('setUser', idUser);
  },
  setToken: ({ commit }, token) => {
    commit('setToken', token);
  },
};

const mutations = {
  setUser(state, idUser) {
    state.user = idUser;
  },
  setToken(state, token) {
    state.token = token;
  },
};

const getters = {
  isAuth: state => {
    return !!state.token;
  },
  setUser: state =>{
    return state.idUser;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
