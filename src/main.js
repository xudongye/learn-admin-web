import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VCharts from 'v-charts'
// import VueSocketIO from 'vue-socket.io'
import WxSocket from '@/utils/socket'

import '@/styles/index.scss' // global css


import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })
Vue.use(VCharts)
Vue.prototype.$socket = new WxSocket('ws://www.kuanghuan.shop:8080/learn/echo/1')
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'ws://www.kuanghuan.shop:8080/learn/echo/1'
// }))

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
