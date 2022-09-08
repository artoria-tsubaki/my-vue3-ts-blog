<script setup lang="ts">
import Carousel from '../components/Carousel.vue'
import { article } from '../types'
import Main from '../viewComponents/Main.vue'
import Card from '../components/Card.vue'
import AOS from 'aos'
import { onMounted } from 'vue'

const articleList: article[] = [
  {
    id: 0,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/hiten_piano.jpg',
    url: '/',
    title: '数据结构与算法',
    summary: '基本数据结构的特点与 JavaScript 实现',
    publishDate: '2022-09-07',
    category: '数据结构与算法',
    tags: ['JavaScript', 'Node'],
  },
  {
    id: 1,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/zinoa_sundown.jpg',
    url: '/',
    title: 'vue.js的学习',
    summary: 'vuejs全家桶基础知识点梳理',
    publishDate: '2022-07-17',
    category: 'vuejs',
    tags: ['vuejs'],
  },
  {
    id: 2,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/kasa.jpg',
    url: '/',
    title: 'JavaScript面试题',
    summary: 'JavaScript的一些面试题',
    publishDate: '2022-09-28',
    category: 'JavaScript',
    tags: ['JavaScript'],
  },
  {
    id: 3,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/bubble.jpg',
    url: '/',
    title: '日语学习',
    summary: '俺的日语学习',
    publishDate: '2022-09-30',
    category: '日语',
    tags: ['日语'],
  },
  {
    id: 4,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/gaze.png',
    url: '/',
    title: 'MongoDB简单的CURD',
    summary: 'MongoDB简易文档对照',
    publishDate: '2022-10-22',
    category: 'MongoDB',
    tags: ['MongoDB'],
  },
  {
    id: 5,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/fish_yuyi.jpg',
    url: '/',
    title: 'axios',
    summary: 'axios基础知识',
    publishDate: '2022-10-25',
    category: 'axios',
    tags: ['axios'],
  },
  {
    id: 6,
    backgroundImage: 'https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_pink.jpg',
    url: '/',
    title: 'JavaScript tips',
    summary: 'JavaScript小技巧整合',
    publishDate: '2022-10-30',
    category: 'JavaScript',
    tags: ['JavaScript'],
  },
]

onMounted(() => {
  console.log(AOS)

  AOS.init()
})
</script>

<template>
  <Carousel></Carousel>
  <Main>
    <div class="index-card">
      <div class="container">
        <el-card shadow="always" class="main-card">
          <div class="dream">
            <div class="title">
              <i class="iconfont icon-linggan"></i>
              <span>最爱语录</span>
            </div>
            <p class="text">每个人都有属于自己的一片森林，也许我们 从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。————村上春树</p>
          </div>
          <div class="recommend-sections">
            <div class="title">
              <i class="iconfont icon-good"></i>
              <span>推荐文章</span>
            </div>
            <div class="sections">
              <div class="post-card">
                <div class="post-body">
                  <div class="post-category">
                    <a href="/">数据结构与算法</a>
                  </div>
                  <a href="/">
                    <h3 class="post-title">数据结构的实现</h3>
                  </a>
                  <div class="post-description">基本数据结构的特点与JavaScript的实现</div>
                  <Button icon="icon-eye" background="linear-gradient(to right, #FF5E3A 0%, #FF2A68 100%)" size="md">阅读更多</Button>
                </div>
              </div>
              <div class="post-card">
                <div class="post-body">
                  <div class="post-category">
                    <a href="/">数据结构与算法</a>
                  </div>
                  <a href="/">
                    <h3 class="post-title">数据结构的实现</h3>
                  </a>
                  <div class="post-description">基本数据结构的特点与JavaScript的实现</div>
                  <Button icon="icon-eye" background="linear-gradient(to right, #EF4DB6 0%, #C643FC 100%)" size="md">阅读更多</Button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <article id="articles" class="container articles">
      <el-row :gutter="22.5">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="articleItem in articleList" :key="articleItem.id" data-aos="zoom-in">
          <Card :articleObj="articleItem"></Card>
        </el-col>
      </el-row>
    </article>
  </Main>
</template>

<style lang="less" scoped>
.index-card {
  margin-top: -10px;
  padding-top: 20px;
  .main-card {
    position: relative;
    margin: 0.5rem 0 1rem 0;
    .title {
      margin-bottom: 20px;
      font-size: 2rem;
      font-weight: 700;
      .iconfont {
        font-size: inherit;
        margin-right: 10px;
      }
    }
    .text {
      width: 65%;
      margin: 0 auto;
      line-height: 1.8rem;
      color: #34495e;
      opacity: 0.6;
      font-size: 1.05rem;

      @media only screen and (max-width: 992px) {
        width: 75%;
      }

      @media only screen and (max-width: 600px) {
        width: 85%;
      }
    }

    .recommend-sections {
      .title {
        margin-top: 25px;
        margin-bottom: 25px;
        text-align: center;
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
      .sections {
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 600px) {
          flex-wrap: wrap;
        }

        .post-card {
          &:first-of-type {
            background-image: url(https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_autumn.png);
          }

          &:nth-of-type(2) {
            background-image: url(https://img-1302665742.cos.ap-shenzhen-fsi.myqcloud.com/2020/07/tiv_yuyi.png);
          }

          height: 300px;
          width: 100%;
          position: relative;
          margin: 15px 1.25rem;
          border-radius: 10px;
          background-position: center center;
          background-size: cover;
          display: flex;
          flex-direction: column;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            z-index: 0;
          }
          .post-body {
            position: relative;
            margin: 0 auto;
            padding: 1.8rem 1.25rem;
            z-index: 2;
            .post-category {
              margin: 10px auto;
              a {
                padding: 0 8px;
                color: hsla(0, 0%, 100%, 0.78) !important;
                font-size: 0.75rem;
                font-weight: 500;
              }
            }
            h3 {
              margin: 38px 0 15px -4px;
              font-size: 1.6rem;
              font-weight: bold;
              line-height: 1.7rem;
              color: #fff;
              &.post-title {
                height: 48px;
                margin-top: 10px;
                margin-bottom: 5px;
              }
            }

            .post-description {
              margin: 20px auto;
              max-width: 500px;
              height: 65px;
              max-height: 65px;
              font-size: 14px;
              color: hsla(0, 0%, 100%, 0.78) !important;
            }
          }
        }
      }
    }
  }
}
</style>
