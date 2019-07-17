import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/components/auth/Login';
import Registration from '@/components/auth/Registration';
import Profile from '@/components/user/VProfile';
import Edit from '@/components/user/EditProfile';
import NotFound from '@/components/auth/NotFound';
import Activity from '@/components/activity/VActivity';
import CreateActivity from '@/components/activity/CreateActivity';
import ActivityList from "../components/activity/ActivityList";

import Vue from 'vue';
import store from '../store';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
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
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound,
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
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuth = store.getters['account/isAuth'];
    if (!isAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
