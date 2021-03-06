import Vue from 'vue'
import App from './frontend/App.vue'
import router from './frontend/router'
import store from './frontend/store'
import Vuei18n from 'vue-i18n'
import Esp from '@/frontend/translations/esp.json'
import Cat from './frontend/translations/cat.json'
import Fr from '@/frontend/translations/fr.json'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAKcFg04dQS3wJd353eMnitMz0Z9yXL60Q',
  authDomain: 'ainaweb-cf021.firebaseapp.com',
  databaseURL: 'https://ainaweb-cf021.firebaseio.com',
  projectId: 'ainaweb-cf021',
  storageBucket: 'ainaweb-cf021.appspot.com',
  messagingSenderId: '98305123386'
}

firebase.initializeApp(firebaseConfig)


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuei18n)
Vue.config.productionTip = false

const messages = {
  cat: Cat,
  esp: Esp,
  fr: Fr
}

const locale = 'cat'

export const i18n = new Vuei18n({
  locale,
  fallbackLocale: 'cat',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
