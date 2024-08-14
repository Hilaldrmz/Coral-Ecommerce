// DEFINE OUR ROUTER RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import OrdersView from "@/views/OrdersView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/products",
            name: 'products',
            component: ProductsView
        },
        {
            path: '/product/:id',
            name: 'ProductView',
            component: ProductView,
        },
        {
            path: '/cart',
            name: 'CartView',
            component: CartView,
        },
        {
            path: '/orders',
            name: 'OrdersView',
            component: OrdersView,
        },
        {
            path: "/:catchall(.*)*",
            name: 'Not Found',
            component: NotFoundView
        },
    ]
});

export default router;