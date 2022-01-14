import Vue from 'vue'
import VueRouter from 'vue-router'
import {userRoutes} from "@/pages/users";

Vue.use(VueRouter)

const routes = [
    ...userRoutes
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