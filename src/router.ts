import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import News from './views/News/News.vue'
import NewsDetail from './views/NewDetail/NewsDetail.vue'
import CreateNew from './backoffice/views/CreateNew/CreateNew.vue'
import NewsList from './backoffice/views/News/News.vue'
import Facilities from '@/views/Facilities/Facilities.vue'

Vue.use(Router)

export default new Router({
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
      component: NewsList
    },
    {
      path: '/admin/news',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/admin/create-new',
      name: 'createNew',
      component: CreateNew
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: Facilities
    }
  ]
})
