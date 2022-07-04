import { createRouter, createWebHistory } from 'vue-router'

import home from './pages/home'
import dashboard from './pages/dashboard'
import finance from './pages/finance'
import refunds from './pages/refunds'
import policy from './pages/policy'


const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: home},
        { path: '/dashboard', component: dashboard },
        { path: '/finance', component: finance },
        { path: '/refunds', component: refunds },
        { path: '/policy', component: policy}
    ]
});

export default router;