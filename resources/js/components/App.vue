<script>
import { defineComponent } from 'vue'
import { SanctumService } from '../services/SanctumService.js'
import ButtonLink from './Common/ButtonLink.vue'

export default defineComponent({
    name: 'App',

    components: {
        ButtonLink
    },

    data() {
        return {
            sToken: null
        }
    },

    methods: {
        getSanctumToken() {
            this.sToken = SanctumService.getToken()
        },

        handleLogout() {
            SanctumService.removeToken()
            this.$router.replace({ name: 'login' })
        }
    },

    mounted() {
        this.getSanctumToken()
    },

    updated() {
        this.getSanctumToken()
    }
})
</script>

<template>
    <nav>
        <ul class='navbar-nav my-5 d-flex flex-row justify-content-evenly align-items-baseline'>
            <li class='nav-item' v-show='sToken'>
                <ul class='navbar-nav my-5 d-flex flex-row justify-content-evenly'>
                    <li class='nav-item me-5'>
                        <router-link :to="{ name: 'main' }" class='text-dark text-decoration-none'>
                            Main
                        </router-link>
                    </li>
                    <li>
                        <ButtonLink @click.prevent='handleLogout'>
                            Logout
                        </ButtonLink>
                    </li>
                </ul>
            </li>
            <li class='nav-item' v-show='!sToken'>
                <ul class='navbar-nav my-5 d-flex flex-row justify-content-evenly'>
                    <li class='nav-item me-5'>
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
            </li>
        </ul>
    </nav>
    <main class='p-5'>
        <router-view :key='$route.fullPath'/>
    </main>
</template>

<style scoped>

</style>
