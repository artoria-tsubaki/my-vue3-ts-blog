<script setup lang="ts">
import Nav from './viewComponents/Nav.vue'
import Footer from './viewComponents/Footer.vue'
import ArrowUp from './components/ArrowUp.vue'
import PostCover from './viewComponents/PostCover.vue';
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
  <header class="navbar-fixed">
    <Nav :isShowGithubNav="state.isShowGithubNav"></Nav>
  </header>
  <PostCover></PostCover>
  <router-view />
  <Footer></Footer>
  <ArrowUp :show="state.isShowArrowUpBtn"></ArrowUp>
</template>

<style lang="less">
@import url('./less/index.less');
#app {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}

.navbar-fixed {
  height: 64px;
  position: relative;
  z-index: 999;
}
</style>
