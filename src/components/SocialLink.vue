<template>
  <div class="social-link">
    <el-tooltip  placement="top" content="访问我的GitHub">
      <a traget="_blank" href="https://github.com/artoria-tsubaki">
        <i class="iconfont icon-github-fill"></i>
      </a>
    </el-tooltip>
    <el-tooltip  placement="top" content="邮箱联系我">
      <a traget="_blank" href="mailto:1248353039@qq.com">
        <i class="iconfont icon-mail-open-fill"></i>
      </a>
    </el-tooltip>
    <el-tooltip  placement="top" content="关注我的Twitter: 破羽残蝶">
      <a traget="_blank" href="https://twitter.com/eDziXu191xjiLP5">
        <i class="iconfont icon-twitter"></i>
      </a>
    </el-tooltip>
    <el-tooltip  placement="top" content="QQ联系我: 1248353039">
      <a traget="_blank" href="tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1248353039">
        <i class="iconfont icon-qq-fill"></i>
      </a>
    </el-tooltip>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang="less" scoped>
 a {
   display: inline;
   padding: 0 15px;
   .iconfont {
    font-size: 1.4rem;
    color: #fff;
  }
 }
</style>