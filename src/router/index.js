import {createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home";
import New from "../views/New";
import Update from "../views/Update";

const routes = [
    {
        path: '/bouquets',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'new',
                name: 'NewBouquet',
                component: New
            },
            {
                path: ':id/update',
                name: 'updateBouquet',
                component: Update
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router