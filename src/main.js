import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import './plugins';
import Datetime from 'vue-datetime';
import VueTruncate from 'vue-truncate-filter';
import moment, {unix} from 'moment';
import './assets/main.scss';
import VModal from 'vue-js-modal'

Vue.use(VueTruncate);
Vue.use(Datetime);
Vue.use(VModal);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(unix(value)).format('MM-DD-YYYY')
  }
});

Vue.filter('formatTime', function(value) {
  if (value) {
    return moment(unix(value)).format("hh:mm")
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
