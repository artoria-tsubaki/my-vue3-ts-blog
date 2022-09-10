<script setup lang="ts">
import Nav from './viewComponents/Nav.vue'
import Footer from './viewComponents/Footer.vue'
import ArrowUp from './components/ArrowUp.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.onscroll = (): void => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      // state.isShowBtn = true
    } else {
      // state.isShowBtn = false
    }
  }
})
</script>

<template>
  <Nav></Nav>
  <router-view />
  <Footer></Footer>
  <ArrowUp></ArrowUp>
</template>

<style lang="less">
#app {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}
@import url('./less/index.less');
</style>
