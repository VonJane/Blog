// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible.js'
import $ from 'jquery'

import '@/icons'

Vue.use(element)

Vue.config.productionTip = false
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'development'?"":"https://39.105.10.69:443"
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  $,
  components: { App },
  template: '<App/>'
})
