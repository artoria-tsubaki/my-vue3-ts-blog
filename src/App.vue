<script setup lang="ts"></script>

<template>
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
