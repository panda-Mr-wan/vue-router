<template>
    <div>
        <h3>Child1组件</h3>
        <ul>
            <li v-for="value in data" :key="value.bookId">
                书籍编号: {{value.bookId}} 
                书名:{{ value.bookName }}
                作者:{{value.author}}
                出版社:{{value.bookPub}}
                上架时间:{{value.bookAddTime}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name:"Child1",
        data(){
            return {
                data:[]
            }
        },
        created(){
            axios.get("./../../mock/data.json")
            .then(res => {
                console.log("res.data",res.data);
                this.data=res.data.data
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>