<template>
    <div>
        <h3>About组件</h3>
        <hr>
        <HomeComponent />
    </div>
</template>

<script>
    import HomeComponent from "./../components/HelloWorld";
    export default {
        name:"About",
        components:{ HomeComponent }
    }
</script>

<style lang="scss" scoped>

</style>