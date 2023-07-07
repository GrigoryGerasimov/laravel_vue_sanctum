<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormControl',

    props: {
        modelId: {
            type: String,
            required: true
        },
        modelType: {
            type: String,
            default: 'text'
        },
        modelName: {
            type: String,
            required: true
        },
        modelPlaceholder: String,
        modelLabel: {
            type: String,
            required: true
        },
        modelValue: String
    },

    emits: ['update:modelValue']
})
</script>

<template>
    <div class='input-group d-flex flex-row flex-wrap my-2 align-items-baseline'>
        <label
            class='form-label label-width'
            :for='modelId'
        >
            {{ modelLabel }}
        </label>
        <input
            class='form-control input-width'
            :type='modelType'
            :id='modelId'
            :name='modelName'
            :value='modelValue'
            :placeholder='modelPlaceholder'
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<style scoped>
.label-width {
    width: 100px
}
.input-width {
    max-width: 350px;
    min-width: 200px;
}
</style>
