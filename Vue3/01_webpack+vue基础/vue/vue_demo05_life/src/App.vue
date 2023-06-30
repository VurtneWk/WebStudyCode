<template>
  <div>
    <LifeComponent v-if="isShow"></LifeComponent>
    <button @click="isShow = false">销毁组件</button>
    <UseAxios></UseAxios>
  </div>
</template>

<script>

import LifeComponent from './components/LifeComponent.vue';
import UseAxios from './components/UseAxios.vue';

export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {
    LifeComponent, UseAxios
  }
}
</script>

<style></style>
