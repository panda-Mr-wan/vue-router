<template>
    <div>
        <h3>Child2组件</h3>
        <ul :class="{loading:isLoading}">
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
        name:"Child2",
        data(){
            return {
                data:[],
                isLoading:false
            }
        },
        created(){
            console.log("book组件传递过来的属性id=",this.$route.query.id)
            this.isLoading=true;
            axios.get("/data")
            .then(res => {
                console.log("res.data",res.data);
                this.data=res.data.data;
                this.isLoading=false
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>