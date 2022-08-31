<template>
  <div class="nav">
    <div class="nav-wrapper container" id="navContainer">
      <!-- logo -->
      <div class="brand-logo">
        <a class="wave-effect" href="/">
          <img class="logo-img" src="https://artoria-tsubaki.github.io/medias/logo.png" alt="" />
          <span class="logo-span">破羽残蝶</span>
        </a>
      </div>
      <!-- menu -->
      <ul class="nav-menu">
        <li class="nav-item">
          <a class="wave-effect" href="/">
            <i class="iconfont icon-homefill"></i>
            <span>首页</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="wave-effect" href="/">
            <i class="iconfont icon-tags"></i>
            <span>标签</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="wave-effect" href="/">
            <i class="iconfont icon-bookmark"></i>
            <span>分类</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="wave-effect" href="/">
            <i class="iconfont icon-archive"></i>
            <span>归档</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="wave-effect" href="/">
            <i class="iconfont icon-user"></i>
            <span>关于</span>
          </a>
        </li>
        <li class="nav-show">
          <a class="wave-effect" href="/">
            <i class="iconfont icon-search"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #777;
  height: 64px;
  line-height: 64px;
  .nav-wrapper {
    display: flex;
    height: 100%;
    // 媒体查询
    width: 90%;
    max-width: 1125px;
    margin: 0 auto;
    justify-content: space-between;
    .brand-logo {
      .wave-effect {
        display: inline-block;
        .logo-img {
          border-style: none;
          height: 45px;
          vertical-align: middle;
          padding-bottom: 8px;
        }
        .logo-span {
          padding-left: 5px;
          font-size: 2rem;
          vertical-align: center;
        }
      }
    }
    .nav-menu {
      list-style-type: none;
      display: flex;

      li {
        &:hover {
        }
        a {
          padding: 0 15px;
        }
      }
    }
  }
}
</style>
