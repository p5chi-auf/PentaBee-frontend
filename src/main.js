import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import VeeValidate from "vee-validate";
import BootstrapVue from "bootstrap-vue";
import Bootstrap from  "bootstrap";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faCog, faPowerOff, faHome, faSignInAlt, faPencilAlt, faArrowsAltH} from "@fortawesome/free-solid-svg-icons";

import HeaderComponent from "./views/Header";
import FooterComponent from "./views/Footer";
import LayoutComponent from "./views/Layout";
import MenuComponent from "./views/Menu";
import "./assets/main.scss";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

library.add(faUser, faCog, faPowerOff, faHome, faSignInAlt, faPencilAlt, faArrowsAltH);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("component-header", HeaderComponent);
Vue.component("component-footer", FooterComponent);
Vue.component("component-layout", LayoutComponent);
Vue.component("component-menu", MenuComponent);

new Vue({
  router,
  BootstrapVue,
  Bootstrap,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount("#app");
