import Vue from "vue";
import App from "./App.vue";
import Registration from "./store/registration";
import router from "./route";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import HeaderComponent from "./views/Header";
import FooterComponent from "./views/Footer";
import LayoutComponent from "./views/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser);
library.add(faCog);
library.add(faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.component("component-header", HeaderComponent);
Vue.component("component-footer", FooterComponent);
Vue.component("component-layout", LayoutComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  FontAwesomeIcon,
  Registration,
  render: h => h(App)
}).$mount("#app");
