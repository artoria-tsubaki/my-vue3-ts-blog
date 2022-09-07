<template>
  <div class="card">
    <a href="/">
      <div class="card-image">
        <img :src="props.articleObj?.backgroundImage" alt="">
        <span class="card-title">{{ props.articleObj?.title }}</span>
      </div>
    </a>
    <div class="card-content">
      <div class="summary">{{ props.articleObj?.summary }}</div>
      <div class="publish-info">
        <span class="publish-date">
          <i class="iconfont icon-time"></i>
          {{ props.articleObj?.publishDate }}
        </span>
        <span class="publish-author">
          <i class="iconfont icon-bookmark"></i>
          <a href="/" class="post-category">
            {{ props.articleObj?.category }}
          </a>
        </span>
      </div>
    </div>
    <div class="card-tag">
      <a href="/">
        <span class="chip bg-color" v-for="(tag, index) in props.articleObj?.tags" :key="index">{{ tag }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import { article } from '../types';
const props = defineProps({
  articleObj: Object as PropType<article>
})
</script>

<style lang="less" scoped>
  .card {
    box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%) !important;
    border-radius: 8px;
    margin: 0.5rem 0 1rem 0;
    position: relative;
    background-color: #fff;
    a {
      display: inline;
      text-decoration: none;
      .card-image {
        position: relative;
        background-color: #222;
        border-radius: 5px;
        img {
          border-radius: 5px 5px 0 0;
          display: block;
          object-fit: cover;
          position: relative;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          height: 220px;
          width: 100%;
          opacity: .7;
        }
        .card-title {
          color: #fff;
          position: absolute;
          left: 0;
          bottom: 0;
          max-width: 100%;
          padding: 24px;
          font-size: 24px;
          font-weight: 300;
        }
      }
    }
    .card-content {
      display: flex;
      flex-direction: column;
      padding: 15px 15px 12px 18px;
      border-radius: 0 0 2px 2px;
      text-align: left;
      border-bottom: 1px solid rgba(160,160,160,0.2);

      .publish-info {
        margin-top: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .post-category {
          color: inherit;
          &:hover {
            text-decoration: underline;
            color: #42b983;
            font-weight: bold;
          }
        }
      }
    }
    .card-tag {
      padding: 10px 15px 10px 18px;
      border-radius: 0 0 8px 8px !important;
      display: flex;
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
    }
  }
</style>