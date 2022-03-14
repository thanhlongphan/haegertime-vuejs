import { createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue';
const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/login',
        name : 'Login',
        // route level code-splitting
        // this generates a separates chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visted.
        component: () => import('../components/Login.vue')
    },
    {
        path : '/profile',
        name : 'Profile',
        component: () => import('../components/Profile.vue')
    },
    {
        path : '/logout',
        name : 'Logout',
        component: () => import('../components/Logout')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

