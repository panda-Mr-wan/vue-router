import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import New from "@/views/New";
import Book from "@/views/Book";
import Menu from "@/views/Menu";
import NoMatch from "@/views/NoMatch";
import Child1 from "@/views/child/Child1";
import Child2 from "@/views/child/Child2";
import Child3 from "@/views/child/Child3";
Vue.use(VueRouter);
const routes=[
    {
        path:"/",
        name:"Home页面",
        component:Home
    },
    {
        path:"/new",
        name:"新闻页面",
        component:New
    },
    {
        path:"/book",
        name:"书籍页面",
        components:{
            default:Book,
            menu:Menu
        },
        children:[
            {
                path:"child1",
                name:"child1",
                component:Child1
            },
            {
                path:"child2",
                name:"child2",
                component:Child2
            },
            {
                path:"child3/:id",
                name:"child3",
                component:Child3
            }
        ]
    },
    {
        path:"/about",
        name:"关于页面",
        component:() => import("./../views/About.vue")
    },
    {
        path:"*",
        name:"找不到",
        component:NoMatch
    }
];
const router = new VueRouter({
    mode:"history",
    "router-link-exact-active":"active",
    vase:process.env.BASE_URL,
    routes
})
export default router;