import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {startApp} from 'wujie'
import Wujie from 'wujie-vue3' // 引入对应的框架
const app = createApp(App)

app.use(router).use(Wujie) // 注册
app.use(router)

app.mount('#app')
