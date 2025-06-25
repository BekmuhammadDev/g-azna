import { createRouter, createWebHistory } from 'vue-router';

import appLayout from '@/layouts/appLayout.vue';

import HomePage from '@/pages/Home.vue';
import ProfilePage from '@/pages/Profile.vue';
import CoursesPage from '@/pages/Course.vue';
import BalancePage from '@/pages/Balance.vue';

import LoginPage from '@/pages/auth/login.vue';
import RegisterPage from '@/pages/auth/register.vue';

const routes = [

  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: RegisterPage },

  {
    path: '/',
    component: appLayout,
    children: [
      { path: 'home', name: 'home', component: HomePage },
      { path: 'profile', name: 'profile', component: ProfilePage },
      { path: 'courses', name: 'courses', component: CoursesPage },
      { path: 'balance', name: 'balance', component: BalancePage },
    ],
  },

  {
    path: '/',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
