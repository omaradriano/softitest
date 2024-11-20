<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import Sidebar from './components/Sidebar.vue'
import MainBody from './components/MainBody.vue'
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
