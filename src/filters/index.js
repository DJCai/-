import Vue from 'vue'
import moment from 'moment'

//日期过滤器
Vue.filter('dateFmt',(input,formatString)=>{
    return moment(input).format(formatString)
})