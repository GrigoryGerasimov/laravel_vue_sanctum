<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageNotFound'
})
</script>

<template>
    <div class='page-container'>
        <h6 class='page-elem'>Page Not Found :(</h6>
    </div>
</template>

<style scoped>
.page-container {
    width: 100%;
    --height: 100vh;
}
.page-elem {
    width: fit-content;
    height: fit-content;
    margin: calc(var(--height)/2.5) auto
}
</style>
