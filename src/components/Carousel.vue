<template>
  <div class="carousel-container">
    <el-carousel height="100vh" :pause-on-hover="false" :interval="7500" arrow="always">
      <el-carousel-item v-for="(carsouelItem, index) in carouselList" :key="carsouelItem.index">
        <div class="carousel-item bg-cover" :style="{backgroundImage: `url(${carsouelItem.url})`}">
          <div class="carousel-content">
            <!-- 第一页不展示文章 单独处理 -->
            <template v-if="index === 0">
              <div class="brand">
                <div class="title">破羽残蝶</div>
                <div class="description">
                  <span id="motto"></span>
                </div>
              </div>
              <div class="cover-btns">
                <Button icon="icon-xiangxiazhanhang">开始阅读</Button>
                <Button icon="icon-github">GitHub</Button>
              </div>
              <div class="cover-social-link">
                <SocialLink></SocialLink>
              </div>
            </template>
            <!-- 展示文章 -->
            <template v-if="index !== 0">
              <div class="brand">
                <div class="carousel-item-post title">数据结构的实现</div>
                <div class="description">
                  基础数据结构的特点与JavaScript实现
                </div>
              </div>
              <div class="cover-btns">
                <Button icon="icon-eye">开始阅读</Button>
              </div>
            </template>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang='ts'>
import { CarsouelItem } from '../types/index.d'
import Button from './Button.vue'
import SocialLink from './SocialLink.vue';
import Typed from 'typed.js';
import { onMounted } from 'vue';
const carouselList: Array<CarsouelItem> = [
  {
    index: 0,
    url: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_whisper.jpg'
  },
  {
    index: 1,
    url: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_autumn.png'
  },
  {
    index: 2,
    url: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_yuyi.png'
  },
]
onMounted(() => {
  var options = {
    strings: ['相信的心◔.̮◔✧就是你的魔法❀', '信じる心ヾ(๑╹◡╹)ﾉ"があなたの魔法〜'],
    // shuffle: true,
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
  };

  var typed = new Typed(document.querySelector("#motto") as Element, options);
}) 
</script>

<style lang="less" scoped>
.carousel-container {
  width: 100vw;
  .el-carousel__item {
    .carousel-item {
      width: 100%;
      height: 100%;
      min-height: 400px;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-content: center;
      .carousel-content {
        color: #fff;
        z-index: 999;
        .title {
          font-size: 4rem;
          line-height: 1.85em;
          margin-bottom: 20px;
          position: relative;
          &.carousel-item-post {
            font-size: 2.4rem;
          }
        }
        .description {
          font-weight: 300;
          font-size: 1.25rem;
          line-height: 1.4em;
          color: #eee;
        }

        .cover-btns {
          position: relative;
          top: 10vh;
          text-align: center;
        }

        .cover-social-link {
          position: relative;
          top: 23vh;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}

</style>