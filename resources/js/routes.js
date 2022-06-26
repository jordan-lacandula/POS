import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import home from './pages/home'
import dashboard from './pages/dashboard'


const router = createRouter({
    history: createWebHistory(),
    routes : [{
            path: '/',
            component: home
        }, {
            path: '/dashboard',
            component: dashboard
        }
    ]
});

export default router;