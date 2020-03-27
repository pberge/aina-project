import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import News from './views/News/News.vue'
import NewsDetail from './views/NewDetail/NewsDetail.vue'
import CreateNew from './backoffice/views/CreateNew/CreateNew.vue'
import EditNew from './backoffice/views/EditNew/EditNew.vue'
import EditPrice from './backoffice/views/EditPrice/EditPrice.vue'
import NewsList from './backoffice/views/News/News.vue'
import Login from './backoffice/views/Login/Login.vue'
import Facilities from '@/frontend/views/Facilities/Facilities.vue'
import Contact from '@/frontend/views/Contact/Contact.vue'
import Prices from '@/frontend/views/Prices/Prices.vue'
import Colonies from '@/frontend/views/Colonies/Colonies.vue'
import History from '@/frontend/views/History/History.vue'
import Donacions from '@/frontend/views/Donacions/Donacions.vue'
import NewDetail from './backoffice/views/NewDetail/NewDetail.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-detail/:id',
      name: 'new-detail',
      component: NewsDetail
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/admin',
      name: 'adminLogin',
      component: Login
    },
    {
      path: '/admin/news',
      name: 'newsList',
      component: NewsList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/prices',
      name: 'editPrices',
      component: EditPrice,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/new-detail/:id',
      name: 'adminNewsDetail',
      component: NewDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/edit-new/:id',
      name: 'editNew',
      component: EditNew,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/create-new',
      name: 'createNew',
      component: CreateNew,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: Facilities
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
    {
      path: '/colonies',
      name: 'colonies',
      component: Colonies
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/donacions',
      name: 'donacions',
      component: Donacions
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/admin')
  else if (to.name === 'adminLogin' && currentUser) next('/admin/news')
  else next()
})

export default router
