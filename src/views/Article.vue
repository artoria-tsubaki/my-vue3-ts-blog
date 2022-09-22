<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import service from '../utils/https'
import markdown from '../utils/markdown'
import Main from '../viewComponents/Main.vue'

const state = reactive({
  articleDetail: {
    content: '',
    toc: '',
  },
})

onMounted(async () => {
  const data = await service.get('/')
  const article = markdown.marked(data)

  article.then((res: any) => {
    state.articleDetail.content = res.content
    state.articleDetail.toc = res.toc
  })
})
</script>

<template>
  <Main>
    <el-row v-show="state.articleDetail.content">
      <el-col :xs="24" :sm="24" :md="18">
        <div class="articleDetail">
          <div class="card">
            <div class="card-header article-info">
              <el-row class="tag-cate">
                <el-col :span="14">
                  <div class="article-tag">
                    <Tag>数据结构与算法</Tag>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="post-cate">
                    <i class="iconfont icon-bookmark"></i>
                    <a href="/">数据结构与算法</a>
                  </div>
                </el-col>
              </el-row>
              <div class="post-info">
                <div class="publish-date">
                  <i class="iconfont icon-daiban"></i>
                  发布日期: 2020-07-17
                </div>
                <div class="update-date">
                  <i class="iconfont icon-shijianjilu"></i>
                  更新日期: 2020-07-17
                </div>
                <div class="article-total">
                  <i class="iconfont icon-wenzhang"></i>
                  文章字数: 2022
                </div>
                <div class="read-time">
                  <i class="iconfont icon-time"></i>
                  阅读时间: 2小时
                </div>
                <div class="read-count">
                  <i class="iconfont icon-eye"></i>
                  阅读次数: 114514
                </div>
              </div>
            </div>
            <div class="card-content article-content">
              <div id="articleContent" class="article-detail" v-html="state.articleDetail.content"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="0" :md="6">
        <div class="article-right toc-fixed fr anchor" v-html="state.articleDetail.toc"></div>
      </el-col>
    </el-row>
  </Main>
</template>

<style lang="less">
@import url('@/less/variables.less');
@import url('../less/article.less');
.articleDetail {
  margin-top: -60px;
  .card {
    position: relative;
    margin: 0.5rem 0 1rem 0;
    background-color: #fff;
    box-shadow: 0 10px 35px 2px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 7%), 0 2px 5px -5px rgb(0 0 0 / 10%) !important;
    border-radius: 10px;
    .tag-cate {
      padding: 20px 30px 1px 40px;
      margin-bottom: 20px;
      .article-tag {
        text-align: left;
      }
      .post-cate {
        text-align: right;
        a {
          color: @primary-a-hover-color;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .post-info {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #cccccc;
    }
  }
}
.article-right {
  width: 345px;
  padding-left: 40px;

  .toc-title {
    margin: 35px 0 15px 0;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    .iconfont {
      font-size: inherit;
      margin-right: 10px;
    }
  }
}
</style>
