import { createRouter, createWebHistory } from 'vue-router';
import appLayout from '@/layouts/appLayout.vue';

import HomePage from '@/pages/Home.vue';
import ProfilePage from '@/pages/Profile.vue';
import CoursesPage from '@/pages/Course.vue';
import BalancePage from '@/pages/Balance.vue';

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
