<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="rev">反转</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: "Hello World!"
    }
  },
  methods: {
    rev() {
      let sp = this.msg.split("")
      sp.reverse()
      this.msg = sp.join('')
    }
  }
}
</script>

<style></style>
