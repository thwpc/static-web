import { createApp } from 'vue'
import App from './views/App.vue'
import './assets/css/index.css'

// createApp(App).mount('#app')
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

