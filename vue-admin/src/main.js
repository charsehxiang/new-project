/* eslint-disable */  //解决严格模式下的格式报错问题
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'
//引入 utls.js
import {domain} from './utls.js'
//引入 common.js
import common from './common.js'
Vue.use(common)
// 引入全局样式
import './styles/main.css'
Vue.use(ElementUI)
import { Loading } from 'element-ui';
// 修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts


// axios.defaults.baseURL = "http://192.168.1.134:9001";//请求默认地址前缀

axios.defaults.headers.post['Content-Type'] = 'application/json'  //请求头
axios.defaults.headers.common['Authorization'] = tokenn;
//配置axios
// ->1,模块一接口,url地址
axios.defaults.baseM1URL = domain.Base_M1_URL
//->2,模块二接口,url地址
axios.defaults.baseM2URL = domain.Base_M2_URL
//->3,模块三接口,url地址
axios.defaults.baseM3URL = domain.Base_M3_URL
// ->4,模块四接口,url地址
axios.defaults.baseM4URL = domain.Base_M4_URL



axios.defaults.timeout=5000;//请求时间
axios.interceptors.request.use(config => {
  const loading = Loading.service({
    fullscreen: true,
    text: '拼命加载中...'
  })

  if (sessionStorage.getItem('token')) {
    config.headers.common.ApiAuth = sessionStorage.getItem('token')//是头部的? token还是apiAuth ?
  }
  return config
})
axios.interceptors.response.use(config => {
  const loading = Loading.service({})
  loading.close()
  return config
})

Vue.config.productionTip = false
// export default axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
