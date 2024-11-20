<script setup lang="ts">

import Icon from '../Items/Icon.vue';
import PriceSummary from '../Items/PriceSummary.vue';
import PayMethod from '../SectionComponents/PayMethod.vue';

</script>

<template>
    <div class="Section-1 fColumn">
        <!-- Total de propinas -->
        <div
            class="fColumn" 
            :style="{
                gap: '5px'
            }">
            <p class="txtSalmon txtBold">Total de propinas</p>
            <div :style="{display: 'flex', alignItems:'center', gap: '10px'}">
                <PriceSummary amount="1,828.00" bg-color="whiteSalmon" txt-color="salmon"/>
                <Icon icon-fs="32px" icon-name="Edit"/>
            </div>
        </div>

        <!-- En cuantos sera dividido -->
        <div
            class="fColumn"
            :style="{
                width: '100%',
                alignItems: 'center',
                marginTop: '10px'
            }">
            <h4 :style="{textAlign: 'start'}" class="txtDark">¿Entre cúantos quieres dividir las
            Propinas?</h4>
            <div class="fRow"
                :style="{
                    marginTop: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '0px 15px',
                    gap: '25px'
                }" >
                <div class="InputTest fRow">
                    <p class="txtBold">#</p>
                    <input type="text">
                </div>
                <h4 class="txtSalmon txtBold">$0.00 x Persona</h4>
            </div>
        </div>

        <!-- Choose pay methods -->
        <div class="fColumn" :style="{
                alignItems: 'center',
            }">
            <div class="fRow"
                :style="{
                    marginTop: '20px',
                    gap: '10px',
                    alignItems: 'center',
                    // justifyContent: 'center'
                }">
                <Icon icon-name="Wallet"/>
                <h4>Elige metodo de pago</h4>
            </div>

            <div class="fRow"
                :style="{
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginTop: '10px',
                    // justifyContent: 'center'
                    gap: '10px'
                }">
                <PayMethod/>
                <PayMethod/>
                <PayMethod/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .Section-1 { 
        grid-area: section_1; 
        background-color: #fff;

        width: 100%;
        align-items: center;
        padding-top: 20px;
        padding: 20px 20px 0 20px;
    }

    .InputTest {
        /* background-color: red; */
        border-radius: 15px;
        /* height: 36px; */
        align-items: center;
        padding: 10px 20px;
        gap: 10px;
        width: 120px;
        border: 1px solid black;
    }
    .InputTest > input {
        width: 100%;
        height: 100%;
        font-size: 18px;
        border: none;
        background-color: transparent;
        outline: none;
        
    }
</style>