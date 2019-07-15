import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/components/auth/Login';
import Registration from '@/components/auth/Registration';
import Activity from '@/components/activity/VActivity';
import CreateActivity from '@/components/activity/CreateActivity'

import Vue from 'vue';
import ActivityList from "../components/activity/ActivityList";
Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: '/activity-list',
      name: 'activityList',
      component: ActivityList,
    },
    {
      path: '/activity/:activityId',
      name: 'activity',
      component: Activity,
    },
    {
      path: '/activity-create',
      name: 'createActivity',
      component: CreateActivity,
    }
  ],
});

