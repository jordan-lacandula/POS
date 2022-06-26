import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import home from './pages/home'
import dashboard from './pages/dashboard'
import policy from './pages/policy'


const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: home},
        { path: '/dashboard', component: dashboard },
        { path: '/policy', component: policy}
    ]
});

export default router;