import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 目标: 全局注册 (一处定义到处使用)
// 1. 创建组件 - 文件名.vue
// 2. 引入组件
import PC from './components/PannelComponent.vue'

// 3. 全局 - 注册组件
/*
  语法: 
  Vue.component("组件名", 组件对象)
*/
app.component("pc-component", PC)


app.mount('#app')
