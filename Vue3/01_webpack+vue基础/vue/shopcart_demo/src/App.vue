<template>
  <div>
    <MyHeader background="red" title="购物车"></MyHeader>
    <div class="main">
      <MyGoods></MyGoods>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyGoods from './components/MyGoods.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
    MyGoods
  },
  created() {
    // console.log(this);
    this.$axios({
      url: '/api/cart'
    }).then(res => {
      console.log(res);
    })
  }
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>