import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/components/auth/Login';
import Registration from '@/components/auth/Registration';
import Activity from '@/components/activity/VActivity';

import Vue from 'vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: ':AId/activity',
      name: 'activity',
      component: Activity,
    }
  ],
});

