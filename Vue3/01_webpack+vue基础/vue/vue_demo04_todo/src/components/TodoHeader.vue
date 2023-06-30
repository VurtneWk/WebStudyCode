<template>
    <header class="header">
        <h1>todos</h1>
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all"></label>
        <input class="new-todo" placeholder="输入任务名称-回车确认" autofocus @keydown.enter="downFn" v-model="task" />
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            task: ''
        }
    },


    methods: {
        downFn() {
            //子传父
            this.$emit("create", this.task)
        }
    }
}
</script>