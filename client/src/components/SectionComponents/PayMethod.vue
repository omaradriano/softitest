<script setup lang="ts">

import Icon from '../Items/Icon.vue';

</script>

<template>
    <div class="PayMethod fColumn">
        <Icon icon-name="Money"/>
        <p
            :style="{
                fontSize: '14px'
            }">Efectivo</p>
    </div>
</template>

<style scoped>
    .PayMethod {
        align-items: center;
        flex: 1;
        height: fit-content;
        padding: 20px 40px;
        border-radius: 20px;
        gap: 3px;
        box-shadow: 0 3px 6px 1px rgba(95, 95, 95, 0.5);
        cursor: pointer;
    }
</style>