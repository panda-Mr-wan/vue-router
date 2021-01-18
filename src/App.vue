<template>
  <div>
    <h3>App组件</h3>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/new">新闻页</router-link></li>
      <li><router-link to="/book">书籍页</router-link></li>
      <li><router-link to="/about">关于页</router-link></li>
    </ul>
    <hr>
    <router-view name="menu"></router-view>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:"App"
  }
</script>

<style lang="css" scoped>
.router-link-exact-active{
  background:#09f;
  color:#fff;
}
</style>