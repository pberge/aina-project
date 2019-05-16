import Vue from 'vue'
import Router from 'vue-router'
import Prices from './BackOffice/prices/Prices.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'prices',
      component: Prices
    }
  ]
})
