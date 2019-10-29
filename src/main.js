import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import store from './store'

import less from 'less'
Vue.use(less)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import animated from 'animate.css'
Vue.use(animated)

import loading from 'vue-nice-loading'
Vue.use(loading)

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
