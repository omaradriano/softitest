<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import Sidebar from './components/SideBar.vue'
import MainBody from './components/MainBody.vue'

import { provide, reactive } from 'vue';

const store = reactive({
  amount: 0, 
  amountRemain: 2750,
  amountString: '', 
  dividedBy: 0,
  payMethod: {
    efectivo:false,
    bbva: false,
    santander: false
  },
  receipts: [
    {
      username: '',
      tips: 0,
      payMethod: ''
    }
  ],
  actions: {  
    InsertTips: {
      state: false,
      checked: false
    },
    InsertAmountOfPeople: {
      state: false,
      checked: false
    },
    SelectPayMethod: {
      state: false,
      checked: false
    },
  },
  disableAllActions(){
    this.actions.InsertAmountOfPeople.state = false
    this.actions.InsertTips.state = false
    this.actions.SelectPayMethod.state = false
  },
  addValue(number: String): void{
    this.amountString += number
    this.formatNumberToLabel(this.amountString)
    this.formatNumberToInput(this.amountString)
    // this.disableAllActions()
  },
  removeValue(): void {
    this.amountString = this.amountString.slice(0, -1);
    if (this.amountString.endsWith('.')) {
      this.amountString = this.amountString.slice(0, -1);
    }
    this.formatNumberToLabel(this.amountString)
    this.formatNumberToInput(this.amountString)
  },
  formatNumberToLabel(numeroString: String): void {
    const numeroLimpio = numeroString.replace(/\D/g, '');
    const numeroConDecimal = numeroLimpio.slice(0, -2) + '.' + numeroLimpio.slice(-2);
    this.amountString = numeroConDecimal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  formatNumberToInput(numeroFormateado: String): void {
    const numeroSinFormato = numeroFormateado.replace(/,/g, '').replace('.', '');
    this.amount = parseFloat(numeroSinFormato) / 100;
  },
  // getStringValue(){
  //   return this.amountString
  // },
  // getNumberValue(){
  //   return this.amount
  // }
  
});

provide('store', store)

</script>

<template>
    <HeaderBar />
    <Sidebar />
    <MainBody />
</template>

<style>
  #app {
    height: 100vh;
    display: grid;
    grid:
      "sidebar header header" 130px
      "sidebar body body" 1fr
      "sidebar body body" 1fr
      / 70px 1fr 1fr;
  }
</style>
