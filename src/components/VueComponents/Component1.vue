<template>
    <div>
        <h3>Component1组件</h3>
        <p>{{msg}}</p>
        <button @click="change">改变msg值</button>
    </div>
</template>

<script>
    export default {
        name:"Component1",
        data(){
            return {
                msg:"我是帅哥"
            }
        },
        methods:{
            change(){
                this.msg="我是美女"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>