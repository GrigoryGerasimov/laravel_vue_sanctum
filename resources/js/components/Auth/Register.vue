<script>
import { defineComponent } from 'vue'
import { FormControl, Button } from '../Common/'

export default defineComponent({
    name: 'Register',
    components: {
        FormControl, Button
    }
})
</script>

<template>
    <div>
        <FormControl
            model-label='First Name'
            mode-type='first_name'
            model-name='first_name'
            model-id='first_name'
            model-placeholder='First Name'
        />
        <FormControl
            model-label='Last Name'
            mode-type='last_name'
            model-name='last_name'
            model-id='last_name'
            model-placeholder='Last Name'
        />
        <FormControl
            model-label='Email'
            mode-type='email'
            model-name='email'
            model-id='email'
            model-placeholder='Email Address'
        />
        <FormControl
            model-label='Password'
            mode-type='password'
            model-name='password'
            model-id='password'
            model-placeholder='Password'
        />
        <FormControl
            model-label='Password Confirmation'
            mode-type='password'
            model-name='password_confirmation'
            model-id='password_confirmation'
            model-placeholder='Confirm Password'
        />
        <Button class='btn-outline-dark'>
            Submit
        </Button>
    </div>
</template>

<style scoped>

</style>
