
import request from '@/utils/request.js'

//首页- 推荐歌单
export const recommentMusic = params => request({
    url: '/personalized',
    params
})

//最新
export const newSong = params => request({
    url: '/personalized/newsong',
    params
})