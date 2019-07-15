import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuei18n from 'vue-i18n'
import Cat from './translations/cat.json'

Vue.use(Vuei18n)
Vue.config.productionTip = false

let messages = {
  cat: Cat
}

export const i18n = new Vuei18n({
  locale: 'cat',
  fallbackLocale: 'cat',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
