import Vue from 'vue'
import Router from 'vue-router'
import Prices from './BackOffice/prices/Prices.vue'
import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    }
  ]
})
