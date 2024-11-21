<script setup lang="ts">
    import Icon from '../Items/Icon.vue';
    import { ref } from 'vue';

    let chars = ['1','2','3','4','5','6','7','8','9','00','0']
    const items = ref([...chars])

</script>

<template>
    <div class="Section-2 fRow">
        <div class="bgNeutral calculator">
            <div class="fRow"
                :style="{
                    borderBottom: '1px solid black',
                    paddingBottom: '10px',
                    alignItems: 'center',
                }">
                <input type="number"
                    :style="{
                        width: '100%',
                        height: '35px',
                        fontSize: '18px',
                        textAlign: 'end',
                        paddingRight: '10px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        outline: 'none'
                    }">
                <Icon icon-name="Backspace"/>
            </div>

            <div class="calc_buttons">
                <div v-for="item in items">
                    {{ item }}
                </div>
                <div 
                    :style="{
                        backgroundColor: '#808080',
                        height: '50px',
                        width: '50px'
                    }">
                    <Icon icon-name="Check" icon-clr="white"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .Section-2 { 
        grid-area: section_2; 
        padding: 20px;
        justify-content: center;

        background-color: #fff;
    }

    .calculator {
        height: 100%;
        width: 100%;
        border-radius: 12px;
        max-width: 350px;
        min-width: 300px;
        padding: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 450px;
    }

    .calc_buttons {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;

        width: 100%;
        height: 80%;
        align-items: center;
        /* justify-content: center; */
        justify-items: center;
        margin-top: 15px;
    }

    .calc_buttons > div {
        /* background-color: red; */
        display: flex;
        height: 100%;
        width: 100%;
        max-width: 64px;
        /* min-width: 58px; */
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid #bbbbbbaf;
        border-radius: 10px;
        font-size: 28px;
        font-weight: 500;
        background-color: #fff;
    }

</style>