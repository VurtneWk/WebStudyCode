import { createApp } from 'vue'
import App from './App.vue'

// let a = 10  如果没关闭lint 检查 ==》  error  'a' is assigned a value but never used  no-unused-vars

createApp(App).mount('#app')
