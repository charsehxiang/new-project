import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import styles from './styles/main.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  styles,
  render: h => h(App)
}).$mount('#app')
