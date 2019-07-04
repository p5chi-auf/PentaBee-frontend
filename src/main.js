import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import './plugins';
import CommonServices from './services/CommunServices';

import './assets/main.scss';

new Vue({
  router,
  store,
  CommonServices,
  render: h => h(App),
}).$mount('#app');
