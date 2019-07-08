import Vue from 'vue';
import Vuex from 'vuex';
import aside from './aside';
import account from './account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    aside,
    account,
  },
});
