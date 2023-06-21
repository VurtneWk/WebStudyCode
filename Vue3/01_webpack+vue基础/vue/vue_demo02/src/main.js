import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"


// createApp.filter('reverse', val => val.split('').reverse().join(''))
// App.filter("reverse", val => val.split('').reverse().join(''))

// 在 3.x 中，过滤器已移除，且不再支持。取而代之的是，我们建议用方法调用或计算属性来替换它们。
const app = createApp(App)

// app.config.globalProperties.$filters = {
//     reverseMsg(value) {
//         return value.split('').reverse().join('');
//     }
// }

app.mount('#app')
