import request from '@/utils/request.js'

export const hotSearch = request(
    {
        url: '/search/hot',
        params
    }
)