const routes = [
    {
        path: '/',
        component: () => import('../components/Main/Main.vue'),
        name: 'main'
    },
    {
        path: '/login',
        component: () => import('../components/Auth/Login.vue'),
        name: 'login'
    },
    {
        path: '/register',
        component: () => import('../components/Auth/Register.vue'),
        name: 'register'
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../components/Common'),
        name: '404'
    }
]

export {
    routes
}
