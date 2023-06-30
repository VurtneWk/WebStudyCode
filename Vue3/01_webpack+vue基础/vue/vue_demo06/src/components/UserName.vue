<template>
    <div>
        <span>用户名</span>
        <input type="text">
        <span>密码</span>
        <input type="password">
    </div>
</template>

<script>
export default {
    methods: {

    },
    created() {
        console.log("username created");
    },
    unmounted() {
        console.log("username unmounted");
    },
    // keep-alive可以提高组件的性能, 内部包裹的标签不会被销毁和重新创建, 触发激活和非激活的生命周期方法
    activated() {
        console.log("username activated");
    },
    // 失去激活状态
    deactivated() {
        console.log("username deactivated");
    }
}
</script>

<style></style>