<script>
import { defineComponent } from 'vue'
import { FormControl, Button, ErrorMessage } from '../Common/'
import { SanctumService } from '../../services/SanctumService.js'

export default defineComponent({
    name: 'Register',

    components: {
        ErrorMessage,
        FormControl,
        Button
    },

    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            passwordConfirmation: null,
            errorData: null
        }
    },

    computed: {
        userData() {
            return {
                name: `${this.firstName} ${this.lastName}`,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation,
            }
        },

        isDisabled() {
            return !(
                this.firstName &&
                this.lastName &&
                this.email &&
                this.password &&
                this.passwordConfirmation
            ) || this.errorData
        }
    },

    methods: {
        async handleSubmit() {
            try {
                await axios.get('/sanctum/csrf-cookie')
                const response = await axios.post('/register', this.userData)
                SanctumService.storeToken(response.config.headers['X-XSRF-TOKEN'])
                this.$router.replace({ name: 'main' })
            } catch (error) {
                this.errorData = Object.values(error.response.data?.errors).flat(Infinity)
                setTimeout(() => this.errorData = null, 3000)
            }
        }
    },

    mounted() {
        this.$refs.init.$el.children[1].focus()
    }
})
</script>

<template>
    <div>
        <FormControl
            model-label='First Name'
            model-type='first_name'
            model-name='first_name'
            model-id='first_name'
            model-placeholder='First Name'
            v-model='firstName'
            ref='init'
        />
        <FormControl
            model-label='Last Name'
            model-type='last_name'
            model-name='last_name'
            model-id='last_name'
            model-placeholder='Last Name'
            v-model='lastName'
        />
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
        <FormControl
            model-label='Password Confirmation'
            model-type='password'
            model-name='password_confirmation'
            model-id='password_confirmation'
            model-placeholder='Confirm Password'
            v-model='passwordConfirmation'
        />
        <Button
            class='btn-outline-dark'
            @click.prevent='handleSubmit'
            :disabled='isDisabled'
        >
            Submit
        </Button>
        <ErrorMessage v-for='(error, index) in errorData' :key='index' :msg='error'/>
    </div>
</template>

<style scoped>

</style>
