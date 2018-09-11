import Vue from 'vue'
import App from './App.vue'

//导入axios
import axios from 'axios'
axios.defaults.baseURL='http://47.106.148.205:8899/'
Vue.prototype.$axios = axios

//导入路由
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
