import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Search from '@/views/Search/index.vue'
import Play from '@/views/Play/index.vue'
import Home from '@/views/Home/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: "搜索"
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    console.log(`before Navigating  from ${from.path} to ${to.path}`);
    next();
});

export default router   