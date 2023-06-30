<template>
  <div>
    <!-- 
      @subPrice="subPriceFn" 
      subPrice 自定义的key , 子组件通过this.$emit('subPrice', index); 调用
      subPriceFn 函数名
     -->
    <MyProduct v-for="(obj, index) in list" :key="obj.id" :title="obj.proname" :price="obj.proprice" :intro="obj.info"
      :index="index" @subPrice="subPriceFn"></MyProduct>
  </div>
</template>

<script>
// 目标: 循环使用组件-分别传入数据
// 1. 创建组件
// 2. 引入组件
import MyProduct from './components/MyProductSub'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  // 3. 注册组件
  components: {
    // MyProduct: MyProduct
    MyProduct
  },
  methods: {
    subPriceFn(index) {
      console.log("父subPriceFn");
      console.log(this.list[index].proprice);
      this.list[index].proprice > 1 && (this.list[index].proprice = (this.list[index].proprice - 1).toFixed(2))
      console.log(this.list[index].proprice);
    }
  }
};
</script>

<style></style>