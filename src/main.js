import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import VeeValidate from "vee-validate";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import HeaderComponent from "./views/Header";
import FooterComponent from "./views/Footer";
import LayoutComponent from "./views/Layout";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

library.add(faUser);
library.add(faCog);
library.add(faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("component-header", HeaderComponent);
Vue.component("component-footer", FooterComponent);
Vue.component("component-layout", LayoutComponent);

new Vue({
  router,
  BootstrapVue,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount("#app");
