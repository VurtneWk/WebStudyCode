<template>
    <ul class="todo-list">
        <!-- completed: 完成的类名 -->
        <li :class="{ completed: obj.isDone }" v-for="obj in arr " :key="obj.id">
            <div class="view">
                <input class="toggle" type="checkbox" v-model="obj.isDone" />
                <label>{{ obj.name }}</label>
                <button class="destroy" @click="deleteFn(obj.id)"></button>
            </div>
        </li>
    </ul>
</template>
  
<script>
export default {
    props: ['arr'],
    methods: {
        deleteFn(id) {
            this.$emit('delete', id)
        }
    }
}
</script>