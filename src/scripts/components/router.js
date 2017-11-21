import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Guide from "./guide.vue";
import Layout from "./layout.vue";
import Home from "./home.vue";
import Master from "./master.vue";
import Tujian from "./tujian.vue";
import Gongju from "./gongju.vue";
import Login from "./master/login.vue";
import Register from "./master/register.vue";
import Servent from "./tujian/servent.vue";
import Food from "./tujian/food.vue";
import Craft from "./tujian/craft.vue";
import Equip from "./tujian/equip.vue";
import Detail from "./tujian/detail.vue";

import img1 from "../../assets/img/head/001.jpg"

const routes = [
    {path:"/",component:Guide},
    {path:"/index",component:Layout,children:[
        {path:"home",name:"home",component:Home,children:[
            {path:"master",name:"master",component:Master},
            {path:"tujian",name:"tujian",component:Tujian},
            {path:"gongju",name:"gongju",component:Gongju},
            {path:"login",name:"login",component:Login},
            {path:"register",name:"register",component:Register},
            {path:"servent",name:"servent",component:Servent},
            {path:"food",name:"food",component:Food},
            {path:"craft",name:"craft",component:Craft},
            {path:"equip",name:"equip",component:Equip},
            {path:"detail",name:"detail",component:Detail},
            {path:"*",redirect:"/index/home/master"}
        ]}
    ]},
    {path:"*",redirect:"/"}
]


const router = new VueRouter({
    routes
})

export default router;