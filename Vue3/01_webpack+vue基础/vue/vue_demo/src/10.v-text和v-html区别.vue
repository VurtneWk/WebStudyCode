<template>
  <div>
    <p v-text="str"></p>
    <p v-html="str"></p>
    <!-- 注意: v-text或v-html会覆盖插值表达式 -->
    <!-- error => Child content is disallowed because it will be overwritten by the v-html directive -->
    <!-- <p v-html="str">{{ 10 + 20 }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "<span>我是一个span</span>"
    }
  }
}
</script>

<style></style>