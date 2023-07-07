<script>
import { defineComponent } from 'vue'
import { FormControl, Button } from '../Common'

export default defineComponent({
    name: 'Login',

    components: {
        FormControl, Button
    }
})
</script>

<template>
    <div>
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
        <Button class='btn-outline-dark'>
            Submit
        </Button>
    </div>
</template>

<style scoped>

</style>
