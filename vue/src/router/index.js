import { createRouter, createWebHistory } from "vue-router";

import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Dashboard from '../view/Dashboard.vue';
import Surveys from '../view/Surveys.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import store from '../store';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/surveys',
                name: 'Surveys',
                component: Surveys
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`

    var tokenExist = store.state.user.token;

    if (to.meta.requiresAuth && !tokenExist) {
        next({ name: 'Login' });
    } else if (tokenExist && (to.name === 'Login' || to.name === 'Register')) {
        next({ name: 'Dashboard' });
    }
    else {
        next();
    }
})

export default router;