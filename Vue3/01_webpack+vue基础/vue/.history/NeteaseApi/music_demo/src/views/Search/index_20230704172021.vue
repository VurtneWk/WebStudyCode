<template>
    <div>
        <van-search v-model="keyword" placeholder="请输入搜索关键词" shape="round" />
        <div class="search_wrap">
            <p class="hot_title">热门搜素</p>
            <div class="hot_name_wrap">
                <span class="hot_item" v-for="(obj, index) in hotSearchList" :key="index" @click="fn(obj.first)">
                    {{ obj.first }}</span>
            </div>
            <p class="hot_title">最佳匹配</p>
            <van-cell center title='结果名字'>
                <template #right-icon>
                    <van-icon name="play-circle-o" size="0.6rem" />
                </template>
            </van-cell>
        </div>
    </div>
</template>

<script>

import { hotSearchAPI, searchResultAPI } from '@/api'

export default {
    data() {
        return {
            keyword: "",
            hotSearchList: [],
            searchResultList: [],
        }
    },
    async created() {
        const res = await hotSearchAPI()
        this.hotSearchList = res.data.result.hots
        console.log(res);
    },
    methods: {
        async fn(val) {
            this.keyword = val
            let res = await this.getResultFn()
            searchResultList = res.data.result.songs
            console.log(res);

        },
        async getResultFn() {
            return await searchResultAPI({
                keywords: this.keyword,
                limit: 20
            })
        }
    }

}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
    padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
    font-size: 0.32rem;
    color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
    margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
}
</style>