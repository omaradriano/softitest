<script setup lang="ts">

// import FooterBody from './components/BodyComponents/Footer_Body.vue';

</script>

<template>
    <div class="mainBody">
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <FooterBody/>
    </div>
</template>

<style scoped>
    .mainBody{
        background-color: black;
        grid-area: body;

        display: grid;
        grid:
            "section_1 section_2 section_3" 1fr
            "section_1 section_2 section_3" 1fr
            "footerBody footerBody footerBody" 120px
            / 1fr 1fr 1fr;
    }
</style>