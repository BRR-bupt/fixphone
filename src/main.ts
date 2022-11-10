import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import createRouter from './router/index'

const router = createRouter(createWebHistory())

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
