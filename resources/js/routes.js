import { createRouter, createWebHashHistory } from 'vue-router'

import home from './pages/home'
import dashboard from './pages/dashboard'


const router = createRouter({
    history: createWebHashHistory(),
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