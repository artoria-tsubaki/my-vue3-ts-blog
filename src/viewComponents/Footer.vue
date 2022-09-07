<template>
  <footer class="page-footer bg-color">
    <div class="container footer-container">
      <div class="footer-left">
          <span class="copyright">Copyright © 2022 <a href="/about">破羽残蝶</a></span>
          <span class="pipe">|</span>
          <span class="powerer-by">Powered By <a href="https://cn.vuejs.org/">Vue3</a></span>
          <span class="pipe">|</span>
          <span class="version">Version 0.01</span>
        <div class="statistics">
          <i class="iconfont icon-areachart"></i>
          站点总字数: <span class="statistical-data">22.9k</span> 字
          <span class="pipe">|</span>
          <i class="iconfont icon-eye"></i>
          总访问量: <span class="statistical-data">232</span> 次
          <span class="pipe">|</span>
          <i class="iconfont icon-group"></i>
          总访问人数: <span class="statistical-data">77</span> 人
        </div>
      </div>
      <SocialLink class="footer-social-link"></SocialLink>
    </div>
  </footer>
</template>

<script setup lang='ts'>
import SocialLink from '../components/SocialLink.vue';
</script>

<style lang="less" scoped>
  .page-footer {
    width: 100%;
    padding: 20px 0;
    color: #dbdbdb;
    background-color: #ee6e73;
    .pipe {
      margin: 0 5px;
    }
    a, .statistical-data {
      color: #fff;
    }

    .footer-container {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 993px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
      }

      .footer-left {
        flex: 1;
        text-align: center;
      }

      .footer-social-link {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 993px) {
          margin-top: 25px;
        }
      }
    }
  }
</style>