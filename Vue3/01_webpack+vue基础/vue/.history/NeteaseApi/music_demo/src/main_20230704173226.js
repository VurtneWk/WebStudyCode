import { createApp } from 'vue'
import App from './App.vue'
import "@/mobile/flexible" //适配
import "@/styles/reset.css" //初始化样式

import router from '@/router/index.js'
import { Tabbar, TabbarItem, NavBar, Row, Col, Image as VanImage, Cell, Icon, Search, List } from 'vant'

const app = createApp(App)




// import { recommentMusicAPI } from '@/api'

// async function fn() {
//     const res = await recommentMusicAPI()
//     console.log(res);
// }
// fn()

app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(NavBar)
app.use(Row)
app.use(Col)
app.use(VanImage)
app.use(Cell)
app.use(Icon)
app.use(Search)
app.use(List)
app.mount('#app')
