<template>
    <div>
        <van-search v-model="keyword" placeholder="请输入搜索关键词" shape="round" @input="inputFn" />
        <div class="search_wrap" v-if="searchResultList.length === 0">
            <p class="hot_title">热门搜素</p>
            <div class="hot_name_wrap">
                <span class="hot_item" v-for="(obj, index) in hotSearchList" :key="index" @click="fn(obj.first)">
                    {{ obj.first }}</span>
            </div>
        </div>
        <div class="search_wrap" v-else>
            <p class="hot_title">最佳匹配</p>
            <!--  -->
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <!-- <van-cell center v-for="obj in searchResultList" :key="obj.al.id" :title='obj.name'
                    :label="obj.ar[0].name + ' - ' + obj.name">
                    <template #right-icon>
                        <van-icon name="play-circle-o" size="0.6rem" />
                    </template>
                </van-cell> -->
                <SongItem v-for="obj in searchResultList" :key="obj.id" :name='obj.name' :author="obj.ar[0].name"
                    :id="obj.id"></SongItem>
            </van-list>
        </div>
    </div>
</template>

<script>

import { hotSearchAPI, searchResultAPI } from '@/api'
import { SongItem } from '@/components/SongItem.vue'

export default {
    data() {
        return {
            keyword: "",
            hotSearchList: [],
            searchResultList: [],
            loading: false,
            finished: false,
            page: 1
        }
    },
    components: {
        SongItem
    },
    async created() {
        const res = await hotSearchAPI()
        this.hotSearchList = res.data.result.hots
        console.log(res);
    },
    methods: {
        async fn(val) {
            this.page = 1
            this.finished = false
            this.keyword = val
            let res = await this.getResultFn()
            this.searchResultList = res.data.result.songs
            console.log(res);
            // this.loading = false

        },
        async getResultFn() {
            return await searchResultAPI({
                keywords: this.keyword,
                limit: 20,
                offset: (this.page - 1) * 20
            })
        },
        async inputFn() {
            if (this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(async () => {
                console.log("inputFn");
                this.page = 1
                this.finished = false
                if (this.keyword.length === 0) {
                    this.searchResultList = []
                    return
                }
                const res = await this.getResultFn()
                console.log(res);
                if (res.data.result.songs === undefined) {
                    this.searchResultList = []
                    return
                }
                this.searchResultList = res.data.result.songs
                this.loading = false
            }, 800)
        },
        async onLoad() {
            this.page++;
            const res = await this.getResultFn();
            if (res.data.result.songs === undefined) {
                this.finished = true
                this.loading = false
                return
            }
            this.searchResultList = [...this.searchResultList, ...res.data.result.songs];
            this.loading = false; // 数据加载完毕-保证下一次还能触发onload
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