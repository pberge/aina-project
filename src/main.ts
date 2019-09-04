import Vue from 'vue'
import App from './frontend/App.vue'
import router from './frontend/router'
import store from './frontend/store'
import Vuei18n from 'vue-i18n'
import Cat from './frontend/translations/cat.json'
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
