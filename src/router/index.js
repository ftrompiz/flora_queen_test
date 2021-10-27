import {createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home";
import New from "../views/New";
import New2 from "../views/New2";
import Update from "../views/Update";

const routes = [
    {
        path: '/bouquets',
        name: 'List Bouquet',
        component: Home,
        children: [
            {
                path: 'new',
                name: 'New Bouquet',
                component: New
            },
            {
                path: 'new2',
                name: 'New2 Bouquet',
                component: New2
            },
            {
                 path: 'update',
                 name: 'Update Bouquet',
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