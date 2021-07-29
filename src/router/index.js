import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // {
    //     // path: '/about',
    //     // name: 'About',
    //     // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        // 注意这里是component,没有s，找半天错误
        component:
            () =>
            import ('views/home/Home')
    },
    {
        path: '/category',
        name: 'Category',
        component: () =>
            import ('../views/category/Category')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ('../views/cart/Cart')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/profile/Profile')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router