<script setup lang="ts">
import Icon from './Items/Icon.vue';


</script>

<template>
    <div class="header">
        <div :style="{display: 'flex', alignItems: 'center', gap: '25px'}">
            <div class='backOption'>
                <Icon icon-name='ArrowBack' icon-class="txtSalmon"/>
                <p class="txtSalmon">Atras</p>
            </div>
            <h2 class="txtBold">Pago de propinas</h2>
        </div>
        
        <div class="SummaryContainer">
            <p class="txtSalmon">Efectivo en caja</p>
            <PriceSummary amount="1,500.00" txtColor="salmon" bgColor="whiteSalmon"/>
        </div>
    </div>
</template>

<style scoped>
    .header { 
        grid-area: header; 
        background-color: #fff;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        padding: 0 25px;
        border-bottom: 1px solid black;
    }

    .backOption {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: fit-content;
        padding: 10px;
        gap: 7px;
    }

    .SummaryContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3px;
    }
</style>
