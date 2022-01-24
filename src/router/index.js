import {createRouter, createWebHistory } from 'vue-router'

import Bouquets from "../components/Bouquets";

const routes = [
    {
        path: '/',
        redirect: '/bouquets'
    },
    {

        path: '/bouquets',
        name: 'Bouquets',
        component: Bouquets,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
