<template>
  <div>
    <h3>App组件</h3>
    <hr>
    <Component1 />
    <hr>
    <Component2 />
  </div>
</template>

<script>
  import Vue from "vue";
  import VueComponents from "./components/VueComponents";
  Vue.use(VueComponents);
  export default {
    name:"App"
  }
</script>

<style lang="scss" scoped>

</style>