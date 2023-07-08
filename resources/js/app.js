import { createApp } from 'vue'
import App from './components/App.vue'
import VueRouter from './router/router.js'
import './bootstrap.js';

const app = createApp({})

app
    .use(VueRouter)
    .component('app', App)
    .mount('#app')
