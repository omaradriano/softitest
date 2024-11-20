<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import HeaderBar from './components/HeaderBar.vue'
import Sidebar from './components/Sidebar.vue'
import MainBody from './components/MainBody.vue'
import FooterBody from './components/BodyComponents/Footer_Body.vue'
</script>

<template>
  <div class="layout">
    <HeaderBar />
    <Sidebar />
    <MainBody />
  </div>
</template>

<style scoped>
  .layout {
    height: 100vh;
    display: grid;
    grid:
      "sidebar header header" 130px
      "sidebar body body" 1fr
      "sidebar body body" 1fr
      / 70px 1fr 1fr;
  }
</style>
