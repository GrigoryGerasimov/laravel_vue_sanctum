import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { SanctumService } from '../services/SanctumService.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (!SanctumService.getToken()) {
        if (to.name !== 'login' && to.name !== 'register') {
            router.replace({ name: 'login' })
        }
    } else {
        if (to.name === 'login' || to.name === 'register') {
            router.replace({ name: 'main' })
        }
    }
})

export default router
