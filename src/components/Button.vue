<template>
  <a href="/" class="my-button" :class="props.size">
    <i class="iconfont" :class="props.icon"></i>
    <slot></slot>
  </a>
</template>

<script setup lang='ts'>
import { defineProps, ref } from 'vue'

const props = defineProps({
  icon: String,
  size: String,
  background: String
})

const background = ref(props.background)

</script>

<style lang="less" scoped>
  .my-button {
    display: inline-block;
    margin: 10px 15px;
    padding: 0 35px;
    height: 45px;
    line-height: 45px;
    font-size: 1rem;
    color: #fff;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 30px;
    box-shadow: none;
    text-transform: uppercase;

    &.md {
      padding: 0 16px;
      height: 40px;
      line-height: 40px;
      font-size: 0.9rem;
      border: transparent;
      border-radius: 20px;
      background: v-bind(background);
    }

    &:not(.md):hover {
      background-color: #f44336;
      border-color: transparent;
      transition: all .3s ease-out;
    }
    .iconfont {
      margin-right: 3px;
    }
  }
</style>