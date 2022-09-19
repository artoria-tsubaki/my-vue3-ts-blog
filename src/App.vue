<script setup lang="ts">
import Nav from './viewComponents/Nav.vue'
import Footer from './viewComponents/Footer.vue'
import ArrowUp from './components/ArrowUp.vue'
import PostCover from './viewComponents/PostCover.vue'
import { onMounted, reactive, toRef, watch } from 'vue'
import { useRouter } from 'vue-router'
const state = reactive({
  // 是否展示“回到顶部”按钮
  isShowArrowUpBtn: false,
  // 是否展示 github 导航栏样式
  isShowGithubNav: false,
  // 是否是首页
  isHomePage: false,
})

onMounted(() => {
  // 监听滚轮事件
  window.onscroll = (): void => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      state.isShowArrowUpBtn = true
      state.isShowGithubNav = true
    } else {
      state.isShowArrowUpBtn = false
      state.isShowGithubNav = false
    }
  }

  // 监听当前路由
  const route = useRouter()
  const currentRoute = toRef(route, 'currentRoute')
  watch(currentRoute, (newValue, oldValue) => {
    if (newValue.name === 'Home') {
      state.isHomePage = true
    }
  })
})
</script>

<template>
  <header class="navbar-fixed">
    <Nav :isShowGithubNav="state.isShowGithubNav"></Nav>
  </header>
  <PostCover v-if="!state.isHomePage"></PostCover>
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
