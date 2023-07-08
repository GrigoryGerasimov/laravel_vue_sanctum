<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ErrorMessage',

    props: {
        msg: String
    }
})
</script>

<template>
    <p class='text-danger'>
        {{ msg }}
    </p>
</template>

<style scoped>

</style>
