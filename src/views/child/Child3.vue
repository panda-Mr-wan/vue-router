<template>
    <div>
        <h3>Child3组件</h3>
    </div>
</template>

<script>
    export default {
        name:"Child3",
        beforeCreate(){
            console.log("通过book组件传递过来的数据",this.$route.params.id)
        }
    }
</script>

<style lang="scss" scoped>

</style>