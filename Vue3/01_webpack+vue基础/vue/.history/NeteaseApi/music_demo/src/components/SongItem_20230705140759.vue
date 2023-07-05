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

}
</script>

<style></style>