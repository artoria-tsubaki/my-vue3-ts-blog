import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

import './assets/font/iconfont.js'
import './assets/font/iconfont.css'

import 'aos/dist/aos.css';

const app = createApp(App)
  
app.use(router)
app.mount('#app')
