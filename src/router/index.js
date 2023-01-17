import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    // 映射关系：path->component
    routes: [
        { path: "/", redirect: "home" },
        { path: '/home', component: () => import('@/views/Home/Home.vue') },
        { path: '/favor', component: () => import('@/views/Favor/Favor.vue') },
        { path: '/order', component: () => import('@/views/Order/Order.vue') },
        { path: '/message', component: () => import('@/views/Message/Message.vue') },
    ]
})

export default router