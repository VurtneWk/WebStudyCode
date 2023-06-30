<template>
    <div class="my-product">
        <h3>标题: {{ title }}</h3>
        <p>价格: {{ price }}元</p>
        <p>{{ intro }}</p>
        <button @click="subFn(index)">宝刀-砍1元</button>
    </div>
</template>
  
<script>

// import eventBus from '../EventBus/EventBus'

export default {
    props: ['title', 'price', 'intro', 'index'],
    methods: {
        subFn(index) {
            console.log('宝刀-砍1元');
            //调用父组件的subPrice表示
            this.$emit('subPrice', index);
            // eventBus.$emit("send", this.index, 1) // 跨组件
        }
    }
}
</script>
  
<style>
.my-product {
    width: 400px;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
}
</style>