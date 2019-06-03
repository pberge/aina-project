import Vue from 'vue'
import Router from 'vue-router'
import Prices from './BackOffice/prices/Prices.vue'
// import BackOffice from './BackOffice/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
    {
      path: '/',
      name: 'home',
      component: Prices
    }
    // {
    //   path: '/',
    //   name: 'backOffice',
    //   component: BackOffice
    // }
  ]
})
