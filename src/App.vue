<script setup lang="ts">
import Nav from './viewComponents/Nav.vue'
import Footer from './viewComponents/Footer.vue'
import ArrowUp from './components/ArrowUp.vue'
import { onMounted, reactive } from 'vue'
const state = reactive({
  isShowArrowUpBtn: false,
  isShowGithubNav: false
})



onMounted(() => {
  window.onscroll = (): void => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      state.isShowArrowUpBtn = true
      state.isShowGithubNav = true
    } else {
      state.isShowArrowUpBtn = false
      state.isShowGithubNav = false
    }    
  }
})
</script>

<template>
  <Nav :isShowGithubNav="state.isShowGithubNav"></Nav>
  <router-view />
  <Footer></Footer>
  <ArrowUp :show="state.isShowArrowUpBtn"></ArrowUp>
</template>

<style lang="less">
#app {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}
@import url('./less/index.less');
</style>
