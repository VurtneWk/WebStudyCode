<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ allCount }}</strong></span>
        <ul class="filters">
            <li>
                <a :class="{ selected: type === 'all' }" href="javascript:;" @click="type = 'all'">全部</a>
            </li>
            <li>
                <a :class="{ selected: type === 'yes' }" href="javascript:;" @click="type = 'yes'">未完成</a>
            </li>
            <li>
                <a :class="{ selected: type === 'no' }" href="javascript:;" @click="type = 'no'">已完成</a>
            </li>
        </ul>
        <button class="clear-completed">清除已完成</button>
    </footer>
</template>
  
<script>
export default {
    props: ['arr'],
    data() {
        return {
            type: 'all'
        }
    },
    computed: {
        allCount() {
            if (this.type === 'all') {
                return this.arr.length
            } else if (this.type === 'yes') {
                return this.arr.filter(item => !item.isDone).length
            } else {
                return this.arr.filter(item => item.isDone).length
            }
        }
    }
}
</script>