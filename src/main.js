// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

// import 
Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.axios = axios

import jquery from 'jquery'
Vue.prototype.jquery = jquery

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

require('./mock');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
