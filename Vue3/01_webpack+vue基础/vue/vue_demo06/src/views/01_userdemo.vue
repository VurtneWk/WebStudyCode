<template>
    <div>
        <button @click="componentName = 'UserNameVue'">账号密码</button>
        <button @click="componentName = 'UserIntroVue'">介绍</button>
        <div style="border: 1px solid red">
            <!-- 使用Vue内置的keep-alive组件, 可以让包裹的组件保存在内存中不被销毁 -->
            <keep-alive>
                <component :is="componentName"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import UserIntroVue from '../components/UserIntro.vue'
import UserNameVue from '../components/UserName.vue'

export default {
    data() {
        return {
            componentName: "UserNameVue"
        }
    },
    components: {
        UserIntroVue,
        UserNameVue
    }
}
</script>

<style></style>
