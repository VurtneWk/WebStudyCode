<template>
  <div class="todoapp">
    <TodoHeader @create="createFn"></TodoHeader>
    <TodoMain :arr="list" @delete="deleteFn"></TodoMain>
    <TodoFooter :arr="list"></TodoFooter>
  </div>
</template>

<script>


import "./styles/base.css"
import "./styles/index.css"

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
    };
  },
  components: {
    TodoHeader, TodoMain, TodoFooter
  },
  methods: {
    createFn(task) {
      this.list.push({
        id: this.list.length === 0 ? 100 : this.list[this.list.length - 1].id + 1,
        name: task,
        isDone: false,
      })
      console.log(task);
    },
    deleteFn(id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  }
}
</script>

<style></style>