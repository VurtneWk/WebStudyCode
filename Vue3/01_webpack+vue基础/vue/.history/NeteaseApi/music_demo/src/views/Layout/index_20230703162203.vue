<template>
    <div>
        <van-nav-bar :title="activeTitle"></van-nav-bar>
        <router-view></router-view>
        <van-tabbar v-model="active">
            <!-- 是否在跳转时替换当前页面历史  -->
            <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            activeTitle: this.$route.meta.title
        }
    },
    watch: {
        $route() {
            this.activeTitle = this.$route.meta.title
        }
    }
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
    padding-top: 46px;
    padding-bottom: 50px;
}
</style>