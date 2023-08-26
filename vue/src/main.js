import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import './input.css'

createApp(App)
.use(store)
.use(router)
.mount('#app')
