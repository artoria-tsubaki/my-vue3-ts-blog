<script setup lang="ts"></script>

<template>
  <a href="/">
    <span class="chip bg-color">
      <slot></slot>
    </span>
  </a>
</template>

<style lang="less" scoped>
.chip {
  display: inline-block;
  margin: 2px;
  font-size: 0.8rem;
  font-weight: 400;
  height: 22px;
  line-height: 22px;
  color: #fff;
  border-radius: 10px;
  padding: 0 12px;
  &:not(:last-child) {
    margin-right: 12px;
  }
}
</style>
