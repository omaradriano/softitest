<script setup lang="ts">
import Icon from '../Items/Icon.vue';

</script>

<template>
    <div class="Section-3">
        <h3 :style="{marginBottom: '18px'}">Pagos</h3>

        <div class="PaidLabel">
            <div>
                <Icon icon-name="Money"/>
                <p>Pay method</p>
            </div>
            <div>
                <p>$300.00</p>
                <Icon icon-name="Close"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .Section-3 { 
        grid-area: section_3; 
        background-color: purple;

        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>