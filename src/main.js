import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import qs from 'qs'

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  render: r => r(App)
})
