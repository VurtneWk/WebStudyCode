<template>
  <div id="appMain">
    <h3>案例：折叠面板</h3>
    <PannelComponent></PannelComponent>
    <PannelComponent></PannelComponent>
    <PannelComponent></PannelComponent>
  </div>
</template>

<script>

import PannelComponent from './components/PannelComponent.vue'

export default {
  components: {
    // PannelC: PannelComponent
    PannelComponent
 
 
 
 、
  }
}
</script>

<style lang="less">
body {
  background-color: #ccc;

  #appMain {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;

    h3 {
      text-align: center;
    }

  }
}
</style>
