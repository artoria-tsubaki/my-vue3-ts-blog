<template>
  <main class="content main-container">
    <slot></slot>
  </main>
</template>

<script setup lang='ts'>

</script>

<style lang="less" scoped>
  .content {
    min-height: 763px;
  }
  .main-container {
    @media only screen and (min-width: 993px) {
      width: 90%;
      margin: 0 auto;
      max-width: 1250px;
    }
  }
</style>