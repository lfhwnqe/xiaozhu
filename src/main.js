// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Row, Col, Button} from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/common.css'

Vue.use(MintUI)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
