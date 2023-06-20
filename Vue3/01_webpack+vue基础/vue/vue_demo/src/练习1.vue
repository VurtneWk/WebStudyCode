<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">{{ val }}</li>
    </ul>
    <button @click="btn"> go</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3]
    }
  },
  methods: {
    btn() {
      // let newArr = this.arr
      let first = this.arr.shift()
      this.arr.push(first)
      // this.arr = newArr
    }
  }
}
</script>

<style></style>