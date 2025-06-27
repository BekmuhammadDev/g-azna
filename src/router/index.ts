import {createRouter, createWebHistory} from 'vue-router';
import appLayout from '@/layouts/appLayout.vue';

import HomePage from '@/pages/Home.vue';
import ProfilePage from '@/pages/Profile.vue';
import CoursesPage from '@/pages/Course.vue';
import BalancePage from '@/pages/Balance.vue';

import LoginPage from '@/pages/auth/login.vue';
import RegisterPage from '@/pages/auth/register.vue';
import VerifyPage from '@/pages/auth/verify.vue';

const routes = [

    {path: '/login', name: 'login', component: LoginPage},
    {path: '/register', name: 'register', component: RegisterPage},
    {path: '/verify', name: 'verify', component: VerifyPage},
    {
        path: '/',
        component: appLayout,
        children: [
            {path: 'home', name: 'home', component: HomePage},
            {path: 'profile', name: 'profile', component: ProfilePage},
            {path: 'courses', name: 'courses', component: CoursesPage},
            {path: 'balance', name: 'balance', component: BalancePage},
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
// router.beforeEach(async (to) => {
//     const authStore = useAuthStore();
//     const user = computed(() => authStore.user);
//
//     if (["404", "403", "500"].includes((to.name || "").toString())) {
//         return true;
//     }
//
//     if (JwtService.getToken() && !Object.keys(user.value)?.length) {
//         await authStore.fetchUserData();
//     }
//
//     if (Object.keys(user.value)?.length && to.name === "login") {
//         return {name: "home"};
//     }
//
//
//     if (to.name === "PrivacyPolicy") return true;
//
//     if (
//         to.name !== "login" &&
//         !JwtService.getToken() &&
//         !Object.keys(user.value)?.length
//     ) {
//         return {name: "login"};
//     } else {
//         return true;
//     }
// });


export default router;
