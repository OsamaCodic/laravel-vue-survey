import { createRouter, createWebHistory } from "vue-router";

import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Dashboard from '../view/Dashboard.vue';
import Surveys from '../view/Surveys.vue';
import DefaultLayout from '../components/DefaultLayout.vue';

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

export default router;