<script setup lang="ts">
import Nav from './components/Nav.vue'
</script>

<template>
  <Nav></Nav>
  <router-view />
</template>

<style lang="less">
@import url('./less/index.less');

.test-div {
  .test-span {
    text-decoration: underline;
  }
}
</style>
