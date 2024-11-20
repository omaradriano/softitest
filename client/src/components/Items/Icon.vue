<script setup lang="ts">
    import { PropType } from 'vue';

    type Color = 'black' | 'white'
    defineProps({
        iconName: {type: String, required: true},
        iconClass: String,
        iconFs: String,
        iconClr: {type: String as PropType<Color>},
    })

</script>

<template>
    <span 
        :class="['material-icons', iconClass]" 
        :style="{ fontSize: iconFs, color: iconClr }">
        {{iconName}}
    </span>
</template>

<style scoped>
    
</style>
