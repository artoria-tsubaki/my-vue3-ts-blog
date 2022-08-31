<script setup lang="ts">
import Nav from './components/Nav.vue'
</script>

<template>
  <Nav></Nav>
  <div class="test-div">
    <span class="test-span"> Test Span </span>
  </div>
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
