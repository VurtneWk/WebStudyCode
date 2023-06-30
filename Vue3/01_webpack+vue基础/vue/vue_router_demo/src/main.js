import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import FindView from './views/FindView.vue'
import MyView from './views/MyView.vue'
import PartView from './views/PartView.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    {
        path: "/",
        redirect: '/find'
    },
    {
        path: '/find',
        component: FindView
    },
    {
        path: '/my',
        component: MyView
    },
    // {
    //     path: '/part/:username',
    //     component: PartView
    // }
    {
        path: '/part',
        component: PartView
    }
    , {
        // path: '/:pathMatch(.*)',
        path: '/:catchAll(.*)',

        // path: '/*', //vue3 中报错 [Vue Router warn]: No match found for location with path "/find123"
        component: NotFound
    }
]

const router = createRouter({
    // history:createWebHashHistory(),
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     console.log(`before Navigating  from ${from.path} to ${to.path}`);
//     next();
// });

// router.afterEach((to, from) => {
//     console.log(`after Navigated from ${from.path} to ${to.path}`);
// });

const app = createApp(App)
app.use(router)
app.mount('#app')
