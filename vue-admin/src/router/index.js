/* eslint-disable */  //解决严格模式下的格式报错问题
import Vue from 'vue'
import VueRouter from 'vue-router'
// import MoYi from '../components/moyi'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:"login"   //重定向
  },
  {
    path: '/login',
    name: 'Login',
    // 路由懒加载
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/moyi',
    name: 'MoYi',
    component: () => import('../views/moyi.vue')
  },
  {
    path: '/banbao',
    name: 'BanBao',
    component: () => import('../views/reports/banbao.vue')
  },
  {
    path: '/ribaobiao',
    name: 'RiBaoBiao',
    component: () => import('../views/reports/ribaobiao.vue')
  },
  {
    path: '/effectReport',
    name: 'EffectReport',
    component: () => import('../views/reports/effectReport.vue')
  },
  {
    path: '/statisticalReport',
    name: 'StatisticalReport',
    component: () => import('../views/reports/statisticalReport.vue')
  },
  {
    path: '/historyCurve',
    name: 'HistoryCurve',
    component: () => import('../views/Curve/historyCurve.vue')
  },
  {
    path: '/systemParameter',
    name: 'SystemParameter',
    component: () => import('../views/Canshu/systemParameter.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // 配置组件与路由之间的关系
  mode: 'history',   //可写可不写 默认是hash模式
  routes
})
// 这是路由拦截  这个之后记得取消注释
router.beforeEach((to, from, next) => {
  
    if (to.path === '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token');

    if (!tokenStr) return next('/login');
    next();
})
export default router
