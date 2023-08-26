import { createRouter, createWebHistory } from "vue-router";

import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Dashboard from '../view/Dashboard.vue';

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
        name: 'Dashboard',
        component: Dashboard
    },
];

const router = createRouter({

    history: createWebHistory(),
    routes
})

export default router;