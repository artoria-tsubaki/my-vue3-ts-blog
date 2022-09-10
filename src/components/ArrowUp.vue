<script setup lang="ts">


defineProps<{show: boolean}>()

const toTopFunction = (): void => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
</script>

<template>
  <div class="arrow-up" v-show="show" @click="toTopFunction">
    <i class="iconfont icon-arrow-up"></i>
  </div>
</template>

<style lang="less" scoped>
.arrow-up {
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #ff5e3a 0%, #ff2a68 100%);
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 50%;
  .icon-arrow-up {
    font-size: 25px;
    color: #fff;
  }
}
</style>
