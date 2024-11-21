<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import Sidebar from './components/Sidebar.vue'
import MainBody from './components/MainBody.vue'

import { provide, reactive } from 'vue';

const store = reactive({
  amount: 0, // Valor numérico puro
  amountString: '', // Cadena acumulativa para mostrar
  dividedBy: 0,
  payMethod: '',

  // Divide el monto
  divide() {
    return this.dividedBy !== 0 ? this.amount / this.dividedBy : 0;
  },

  // Incrementar y actualizar valores
  increment(number: string) {
    this.amountString += number; // Agregar el número como texto
    this.updateAmount(); // Actualizar el valor numérico puro
  },

  // Borrar el último carácter
  deleteLastChar() {
    if (this.amountString.length > 0) {
      this.amountString = this.amountString.slice(0, -1); // Elimina el último carácter
      this.updateAmount(); // Actualizar el valor numérico puro
    }
  },

  // Actualizar el número puro
  updateAmount() {
    this.amount = parseFloat(this.amountString) / 100 || 0; // Si queda vacío, establecer 0
  },

  // Formatear el número para mostrar
  formatNumberManual() {
    if (!this.amount) return "0.00"; // Mostrar 0.00 si el número es 0
    const number = this.amount.toFixed(2); // Asegurar 2 decimales
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Separar miles
  },
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
