import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

axios.defaults.baseURL = "https://www.escook.cn"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://10.0.70.49:8080/';

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.mount('#app')
