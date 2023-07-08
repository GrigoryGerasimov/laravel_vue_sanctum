<script>
import { defineComponent } from 'vue'
import { FormControl, Button, ErrorMessage } from '../Common'
import { SanctumService } from '../../services/SanctumService.js'

export default defineComponent({
    name: 'Login',

    components: {
        FormControl, Button, ErrorMessage
    },

    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },

    computed: {
        isDisabled() {
            return !(this.email && this.password) || this.error
        }
    },

    methods: {
        async handleSubmit() {
            try {
                await axios.get('/sanctum/csrf-cookie')
                const response = await axios.post('/login', {
                    email: this.email,
                    password: this.password
                })
                SanctumService.storeToken(response.config.headers['X-XSRF-TOKEN'])
                this.$router.replace({ name: 'main' })
            } catch (error) {
                this.error = error.response.data.message
                setTimeout(() => this.error = null, 3000)
            }
        }
    }
})
</script>

<template>
    <div>
        <FormControl
            model-label='Email'
            model-type='email'
            model-name='email'
            model-id='email'
            model-placeholder='Email Address'
            v-model='email'
        />
        <FormControl
            model-label='Password'
            model-type='password'
            model-name='password'
            model-id='password'
            model-placeholder='Password'
            v-model='password'
        />
        <Button
            class='btn-outline-dark'
            @click.prevent='handleSubmit'
            :disabled='isDisabled'
        >
            Submit
        </Button>
        <ErrorMessage :msg='error'/>
    </div>
</template>

<style scoped>

</style>
