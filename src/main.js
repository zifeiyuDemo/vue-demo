// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

import store from './store'
import http from '@/axios'
// import './mock'

Vue.config.productionTip = false
Vue.use(Antd)

Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  http,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
