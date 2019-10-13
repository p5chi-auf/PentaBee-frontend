import Router from 'vue-router';
import Home from '@/views/TheHome';
import Login from '@/components/auth/Login';
import Registration from '@/components/auth/Registration';
import Profile from '@/components/user/VProfile';
import Edit from '@/views/VEdit';
import NotFound from '@/views/NotFound';
import Activity from '@/components/activity/VActivity';
import CreateActivity from '@/components/activity/CreateActivity';
import ActivityList from '../components/activity/ActivityList';
import ActivityEdit from '@/components/activity/EditActivity';
import List from '@/components/user/UsersList';
import ApplicantsList from '../components/activity/UsersFiltredList';
import Invite from '@/components/activity/InviteUsers';
import Validation from '@/components/activity/ValidateActivity';

import Vue from 'vue';
import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
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
      path: '/profile/:userId',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/edit/:userId',
      name: 'edit',
      component: Edit,
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '/activity-list/:filter',
      name: 'activityList',
      component: ActivityList,
      meta: { requiresAuth: true },
    },
    {
      path: '/activity/:activityId',
      name: 'activity',
      component: Activity,
      meta: { requiresAuth: true },
    },
    {
      path: '/activity/:activityId/invite',
      name: 'invite',
      component: Invite,
      meta: { requiresAuth: true },
    },
    {
      path: '/activity/:activityEditId/edit',
      name: 'activityEdit',
      component: ActivityEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/activity-create',
      name: 'createActivity',
      component: CreateActivity,
      meta: { requiresAuth: true },
    },
    {
      path: '/activity/:idActivity/applicants',
      name: 'applicantsList',
      component: ApplicantsList,
      meta: { requiresAuth: true },
    },
    {
      path: '/team/:filter',
      name: 'usersList',
      component: List,
      meta: { requiresAuth: true },
    },
    {
      path: '/activities/validation',
      name: 'validation',
      component: Validation,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuth = store.getters['account/isAuth'];

    if (!isAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
