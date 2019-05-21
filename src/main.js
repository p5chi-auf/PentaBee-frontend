import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./registerServiceWorker";
import HeaderComponent from "./views/Header";
import FooterComponent from "./views/Footer";
import LayoutComponent from "./views/Layout";
import VeeValidate from "vee-validate";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Vue.component("component-header", HeaderComponent);
Vue.component("component-footer", FooterComponent);
Vue.component("component-layout", LayoutComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  VeeValidate,
  render: h => h(App)
}).$mount("#app");
