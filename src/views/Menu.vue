<template>
    <div>
        <h3>Menu组件</h3>
        <ul>
            <li><router-link to="/book/child1">child1</router-link></li>
            <li><router-link to="/book/child2?id=1002">child2</router-link></li>
            <li><router-link to="/book/child3/1001">child3</router-link></li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"menu"
    }
</script>

<style lang="scss" scoped>

</style>