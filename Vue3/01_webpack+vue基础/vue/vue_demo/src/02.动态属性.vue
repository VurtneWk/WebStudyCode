<template>
  <div>
    <a v-bind:href="url">点击去百度</a>
    <img :src="imgUrl" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      url: "http://www.baidu.com",
      imgUrl: "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg"
    }
  }
}
</script>

<style></style>
