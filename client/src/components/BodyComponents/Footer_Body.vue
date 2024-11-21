<script setup lang="ts">

</script>

<template>
    <div class="footerBody">
        <div>
            <div class="SummaryLabel">
                <h2 class="txtSalmon">Total Pagado</h2>
                <h2 class="txtSalmon">$300.00</h2>
            </div>
            <div class="SummaryLabel">
                <h2>Restante por pagar</h2>
                <h2>$1,200.00</h2>
            </div>
        </div>
        <h1>
            Pagar $300.00 en Propinas
        </h1>
    </div>
</template>

<style scoped>
    .footerBody { 
        grid-area: footerBody; 
        background-color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 55px;
        padding: 0 50px;
    }

    .footerBody > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* background-color: red; */
        width: 100%;
        max-width: 550px;
        /* align-items: center; */
    }

    .footerBody > h1 {
        display: block;
        /* background-color: red; */
        padding: 15px 65px;
        font-size: 22px;
        border-radius: 35px;
        background-color: var(--color-salmon);
        color: #fff;
    }

    .SummaryLabel {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
</style>