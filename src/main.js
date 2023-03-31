import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css'
import 'scene-ui/style'
import ElementPlus from 'element-plus'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
