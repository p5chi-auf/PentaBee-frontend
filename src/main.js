import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import './plugins';
import Datetime from 'vue-datetime';
import './assets/styles/vueDataTime.css'; //style for datetime piker
import VueTruncate from 'vue-truncate-filter';
import moment, {unix} from 'moment';
import './assets/main.scss';

Vue.use(VueTruncate);
Vue.use(Datetime);

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
