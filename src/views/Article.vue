<script setup lang="ts">
import { onMounted } from 'vue'
import service from '../utils/https'
import Main from '../viewComponents/Main.vue'

onMounted(async () => {
  const data = await service.get('/')
  console.log(data)
})
</script>

<template>
  <Main>
    <el-row>
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
                  <span class="post-cate">
                    <i class="iconfont icon-bookmark"></i>
                    <a href="/">数据结构与算法</a>
                  </span>
                </el-col>
              </el-row>
            </div>
            <div class="card-content article-content"></div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="0" :md="6"> 456 </el-col>
    </el-row>
  </Main>
</template>

<style lang="less" scoped>
@import url('@/less/variables.less');
.articleDetail {
  margin-top: -60px;
  .card {
    position: relative;
    margin: 0.5rem 0 1rem 0;
    background-color: #fff;
    box-shadow: 0 10px 35px 2px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 7%), 0 2px 5px -5px rgb(0 0 0 / 10%) !important;
    border-radius: 10px;

    .post-cate {
      a:hover {
        color: @primary-a-hover-color;
        text-decoration: underline;
      }
    }
  }
}
</style>
