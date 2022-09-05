<script setup lang="ts">
import Nav from './components/Nav.vue'
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
}
@import url('./less/index.less');

.test-div {
  .test-span {
    text-decoration: underline;
  }
}
</style>
