<script setup lang="ts">
import Nav from './viewComponents/Nav.vue'
import Footer from './viewComponents/Footer.vue';
</script>

<template>
  <Nav></Nav>
  <router-view />
  <Footer></Footer>
</template>

<style lang="less">
#app {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}
@import url('./less/index.less');
</style>
