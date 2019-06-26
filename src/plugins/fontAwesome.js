import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUser,
  faCog,
  faPowerOff,
  faHome,
  faSignInAlt,
  faPencilAlt,
  faArrowsAltH,
  faArrowsAltV,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUser,
  faCog,
  faPowerOff,
  faHome,
  faSignInAlt,
  faPencilAlt,
  faArrowsAltH,
  faArrowsAltV,
  faUserEdit,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
