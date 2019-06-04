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
import AsideComponent from "./views/Aside";
import "./assets/main.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

library.add(faUser);
library.add(faCog);
library.add(faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("component-header", HeaderComponent);
Vue.component("component-footer", FooterComponent);
Vue.component("component-layout", LayoutComponent);
Vue.component("component-aside", AsideComponent);


VeeValidate.Validator.extend("verifyPassword", {
  // eslint-disable-next-line no-unused-vars
  getMessage: field =>
    `The password should contain Minimum 6 and Maximum 12 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character.`,
  validate: value => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,16})"
    );
    return strongRegex.test(value);
  }
});


new Vue({
  router,
  BootstrapVue,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount("#app");
