import Vue from 'vue'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
 
import App from './App.vue'

//网络请求相关
import axios from 'axios'
axios.defaults.baseURL='http://47.106.148.205:8899/'
Vue.prototype.$axios = axios

//导入ElementUI
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
//导入懒加载
Vue.use(VueLazyload,{
  //懒加载的图片资源需要用require导入
  loading: require('./statics/site/images/02.gif'),
})

//导入路由
import router from './router'

//导入过滤器
import './filters'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
