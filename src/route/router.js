import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/components/auth/Login';
import Registration from '@/components/auth/Registration';
import Profile from '@/components/user/VProfile';
import Edit from '@/components/user/EditProfile';
import NotFound from '@/components/auth/NotFound';
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
        auth: true,
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
        auth: true,
      },
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      meta: {
        auth: true,
      },
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    const isAuth = store.getters['account/isAuthentificated'];
    if (isAuth) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
