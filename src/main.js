// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueFacebookPage from 'vue-facebook-page'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueFacebookPage, "454191771605285")

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
