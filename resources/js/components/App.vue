<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App'
})
</script>

<template>
    <nav>
        <ul class='navbar-nav my-5 d-flex flex-row justify-content-evenly'>
            <li class='nav-item'>
                <router-link :to="{ name: 'main' }" class='text-dark text-decoration-none'>
                    Main
                </router-link>
            </li>
            <li class='nav-item'>
                <router-link :to="{ name: 'login' }" class='text-dark text-decoration-none'>
                    Login
                </router-link>
            </li>
            <li class='nav-item'>
                <router-link :to="{ name: 'register' }" class='text-dark text-decoration-none'>
                    Register
                </router-link>
            </li>
        </ul>
    </nav>
    <main class='p-5'>
        <router-view/>
    </main>
</template>

<style scoped>

</style>
