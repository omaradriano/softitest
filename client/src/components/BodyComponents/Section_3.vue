<script setup lang="ts">
import Icon from '../Items/Icon.vue';

</script>

<template>
    <div class="Section-3">
        <h3 :style="{
            marginBottom: '18px',
            fontWeight: '700',
        }">Pagos</h3>

        <div class="PaidLabel">
            <div class="PaidLabel__left">
                <Icon icon-name="Money" icon-fs="32px"/>
                <p>Efectivo</p>
            </div>
            <div class="PaidLabel__right">
                <p>$300.00</p>
                <Icon icon-name="Close" icon-clr="white" icon-fs="32px" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.Section-3 {
    grid-area: section_3;
    background-color: #fff;
    /* background-color: purple; */
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.PaidLabel {
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 15px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    justify-content: space-between;
    height: fit-content;
}

.PaidLabel__left{
    display: flex;
    gap: 15px;
    align-items: center;
}
.PaidLabel__left > p {
    font-weight: 700;
}

.PaidLabel__right{
    display: flex;
    align-items: center;
    gap: 10px;
}

.PaidLabel__right > p {
    font-size: 24px;
    font-weight: 700;
}
</style>