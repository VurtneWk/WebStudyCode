<template>
    <van-cell center v-for="obj in searchResultList" :key="obj.al.id" :title='obj.name'
        :label="obj.ar[0].name + ' - ' + obj.name">
        <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
        </template>
    </van-cell>
</template>

<script>
export default {
    props: {
        name: String,
        author: String, // 歌手
        id: Number, // 歌曲id (标记这首歌曲-为将来跳转播放页做准备)
    }

}
</script>

<style></style>