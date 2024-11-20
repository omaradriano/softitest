<script setup lang="ts">

    import { defineProps, PropType } from 'vue';
    defineProps({
        customClass: String,
        txtColor: {
            type: String as PropType<TxtColor>,
            required: true
        },
        bgColor: {
            type: String as PropType<BgColor>,
            required: true
        },
        amount: String
    })

    type TxtColor = 'salmon' | 'dark'
    type BgColor = 'whiteSalmon' 

    let colors: Record<TxtColor, string> = {
        salmon: 'txtSalmon',
        dark: 'txtDark',
    };
    let bgs: Record<BgColor, String> = {
        whiteSalmon: 'bgSalmon'
    }


</script>

<template>
    <div 
        :class="['PriceSummary', customClass, colors[txtColor], bgs[bgColor]]">
        <h1>${{ amount }}</h1>
    </div>
</template>

<style scoped>
    .PriceSummary {
        display: block;
        height: fit-content;
        /* background-color: gray; */
        width: fit-content;
        padding: 7px 18px;
        border-radius: 8px;
    }
</style>