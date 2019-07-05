import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import './plugins';

import './assets/main.scss';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
