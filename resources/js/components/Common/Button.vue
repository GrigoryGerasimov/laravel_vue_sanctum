<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Button',

    props: {
        modelType: {
            type: String,
            default: 'button'
        }
    }
})
</script>

<template>
    <button :type="modelType" class='my-3 px-4 btn'>
        <slot></slot>
    </button>
</template>

<style scoped>

</style>
