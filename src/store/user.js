const state = () => ({
  user: null,
  token: null,
});

const actions = {
  login: ({dispatch},payload)=>{
    const { user, token} = payload;
    dispatch('setUser',user);
    dispatch('setToken',token);
  },
  logout: ()=>{
    window.localStorage.removeItem('token');
    // dispatch('setUser',null);
    // dispatch('setToken',null);
  },
  setUser: ({ commit }, payload) => {
    commit('setUser', payload);
  },
  setToken: ({ commit }, token) => {
    commit('setToken', token);
  }
};

const mutations = {
  setUser(state,payload) {
    state.user = payload;
  },
  setToken(state,token) {
    state.token = token;
  }
};

const getters = {
  isAuthentificated:(state)=>{
    return !!state.token && !!state.user;
}
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
