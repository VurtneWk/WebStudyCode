<template>
  <div>
    你要购买的商品数量: {{ count }}
    <br>
    <button v-on:click="count = count + 1">+1</button>
    <button v-on:click="addFn()">+1</button>
    <button v-on:click="addCountFn(5)">+5</button>
    <button @click="subFn">-1</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    addFn() {
      this.count++
    },
    addCountFn(num) {
      this.count += num
    },
    subFn() {
      this.count--
    }

  }
}
</script>

<style></style>
