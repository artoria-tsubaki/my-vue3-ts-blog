<template>
  <div class="bg-cover post-header" :style="{backgroundImage: `url('${postImage}')`}"></div>
</template>

<script setup lang='ts'>
const postImage = 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_autumn.png'
</script>

<style lang="less" scoped>
  .post-header {
    margin-top: -64px;
    height: 40vh;
    width: 100%;
    // background-image: url(v-bind(postImage))
  }
</style>