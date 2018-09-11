import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)   //集成路由组件

//商品列表页
import goodslist from '../components/good/goodslist.vue'

//商品详情页
import goodsinfo from '../components/good/goodsinfo.vue'

//路由
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/goodslist'},
        {path:'/goodslist',component:goodslist},
        {path:'/goodsinfo/:goodsid',component:goodsinfo}
    ]
})
//导出路由
export default router