<template>
    <div>
        <p id="myP"></p>
        <ul id="myUL">
            <li v-for="(val, index) in arr" :key="index">{{ val }}</li>
        </ul>
        <button @click="arr.push(1000)">点击</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "hi",
            arr: [5, 8, 2, 1]
        }
    },
    //会在实例初始化完成、props 解析之后、data() 和 computed 等选项处理之前立即调用。
    beforeCreate() {
        console.log("beforeCreate");
        console.log(this.msg); //undefined
    },
    //当这个钩子被调用时，以下内容已经设置完成：响应式数据、计算属性、方法和侦听器。然而，此时挂载阶段还未开始，因此 $el 属性仍不可用。
    created() {
        console.log("created");
        console.log(this.msg);
        this.timer = setInterval(() => {
            console.log("setInterval");
        }, 1000)
    },
    //当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。
    //
    beforeMount() {
        console.log("beforeMount");
        console.log(document.getElementById("myP")); //null
    },
    //
    mounted() {
        console.log("mounted");
        console.log(document.getElementById("myP"));
    },
    beforeUpdate() {
        console.log("beforeUpdate");
        console.log(document.querySelectorAll("#myUL>li")[4]);
    },
    updated() {
        console.log("updated");
        console.log(document.querySelectorAll("#myUL>li")[4]);
    },
    // Vue2 中使用beforeDestroy 等、Vue3中使用beforeUnmount
    //use beforeUnmount instead 
    // beforeDestroy(){
    //     console.log("beforeDestroy");
    // }
    //移除组件、计时器、定时器、eventBus移除时间$off等
    beforeUnmount() {
        console.log("beforeUnmount");
        clearInterval(this.timer) //销毁计时器
    },
    unmounted() {
        console.log("unmounted");
    }
}
</script>

<style></style>