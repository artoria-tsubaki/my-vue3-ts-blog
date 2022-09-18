import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Article from '../views/Article.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;