<template>
  <div class="nav" :class="state.isShowGithubIcon ? 'nav-green bg-color' : ''">
    <div class="nav-wrapper container" id="navContainer">
      <!-- bars -->
      <a href="#" class="sidenav-trigger" @click="showMobileNav">
        <i class="iconfont icon-bars"></i>
      </a>
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
      <!-- mobile nav -->
      <div class="mobile-nav" :style="{ transform: state.isShowMobileNav ? 'translateX(0%)' : 'translateX(-105%)' }">
        <div class="mobile-head bg-color">
          <img class="logo-img" src="https://artoria-tsubaki.github.io/medias/logo.png" alt="logo" />
          <div class="logo-name">破羽残蝶</div>
          <div class="logo-desc">Never really desperate, only the lost of the soul.</div>
        </div>
        <ul class="mobile-menu-list">
          <li class="m-nav-item">
            <a class="wave-effect" href="/">
              <i class="iconfont icon-homefill"></i>
              <span>首页</span>
            </a>
          </li>
          <li class="m-nav-item">
            <a class="wave-effect" href="/">
              <i class="iconfont icon-tags"></i>
              <span>标签</span>
            </a>
          </li>
          <li class="m-nav-item">
            <a class="wave-effect" href="/">
              <i class="iconfont icon-bookmark"></i>
              <span>分类</span>
            </a>
          </li>
          <li class="m-nav-item">
            <a class="wave-effect" href="/">
              <i class="iconfont icon-archive"></i>
              <span>归档</span>
            </a>
          </li>
          <li class="m-nav-item">
            <a class="wave-effect" href="/">
              <i class="iconfont icon-user"></i>
              <span>关于</span>
            </a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a href="https://github.com/artoria-tsubaki/artoria-tsubaki.github.io">
              <i class="iconfont icon-github-fill"></i>
              <b>Fork me</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="https://github.com/artoria-tsubaki/artoria-tsubaki.github.io"
      class="github-corner tooltipped hide-on-med-and-down"
      target="_blank"
      data-tooltip="Fork Me"
      data-position="left"
      data-delay="50"
      v-if="state.isShowGithubIcon"
    >
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const state = reactive({
  isShowGithubIcon: false,
  isShowMobileNav: false,
})

const showMobileNav = (): void => {
  state.isShowMobileNav = true
}

// onMounted(() => {
//   window.onscroll = (): void => {
//     if (window.document.body.scrollTop > 100 || window.document.documentElement.scrollTop > 100) {
//       state.isShowGithubIcon = true
//     } else {
//       state.isShowGithubIcon = false
//     }
//   }
// })
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: transparent;
  height: 64px;
  line-height: 64px;
  z-index: 19991001;
  &.nav-green {
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 7px 10px 0 rgb(0 0 0 / 12%);
  }
  .nav-wrapper {
    display: flex;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    // logo
    .brand-logo {
      .wave-effect {
        display: inline-block;
        height: 100%;
        display: flex;
        align-items: center;
        .logo-img {
          border-style: none;
          height: 36px;
        }
        .logo-span {
          font-size: 2rem;
        }
      }
    }
    // menu
    .nav-menu {
      list-style-type: none;
      display: flex;

      li {
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        a {
          padding: 0 15px;
        }
      }
    }
    // mobile nav
    .mobile-nav {
      z-index: 999;
      position: fixed;
      left: 0;
      top: 0;
      height: calc(100% + 60px);
      padding-bottom: 60px;
      width: 240px;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 7px 10px 0 rgb(0 0 0 / 12%);
      background-color: #fff;
      transition: transform 0.2s ease-in-out;
      .mobile-head {
        padding: 0 15px;
        text-align: left;
        .logo-img {
          margin-top: 30px;
          width: 75px;
          height: 75px;
          border-radius: 50%;
        }
        .logo-name {
          margin-top: -30px;
          padding-left: 10px;
          font-size: 1.5rem;
        }
        .logo-desc {
          margin-top: -10px;
          padding-left: 10px;
          padding-bottom: 10px;
          font-size: 0.8rem;
          line-height: 1.3rem;
          color: #e3e3e3;
        }
      }
      .mobile-menu-list {
        margin: 0;
        list-style-type: none;
        li {
          margin-left: -15px;
          a {
            display: inline-block;
            display: flex;
            height: 50px;
            line-height: 50px;
            color: #34495e;
            padding: 0 32px;
            font-size: 14px;
            &:hover {
              background-color: rgba(0, 0, 0, 0.05);
            }
            .iconfont {
              display: block;
              width: 3.3rem;
              text-align: left;
              margin: 0 32px 0 0;
              font-size: 18px;
            }
          }
          .divider {
            margin: 8px 0 0;
            height: 1px;
            background-color: #e0e0e0;
          }
        }
      }
    }
  }

  // github icon show
  .github-corner {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    border: 0;
    transform: scale(1.1);
  }

  .github-corner svg {
    color: #0f9d58;
    fill: #fff;
    height: 64px;
    width: 64px;
  }

  .github-corner:hover .octo-arm {
    animation: a 0.56s ease-in-out;
  }

  .github-corner .octo-arm {
    animation: none;
  }

  @keyframes a {
    0%,
    to {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }

  // media search
  @media only screen and (max-width: 992px) {
    .nav-item {
      display: none;
    }

    .github-corner {
      display: none;
    }
  }

  @media only screen and (min-width: 993px) {
    .sidenav-trigger {
      display: none;
    }
  }
}
</style>
