import Vue from 'vue'
import VueRouter from 'vue-router'
import {userRoutes} from "@/pages/users";
import {orderRoutes} from "@/pages/Order";
import {accountRoutes} from "@/pages/account";

Vue.use(VueRouter)

const routes = [
    ...userRoutes,
    ...orderRoutes,
    ...accountRoutes
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router;