import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

const VueFlexboxgrid = require('vue-flexboxgrid')
Vue.use(VueFlexboxgrid)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
