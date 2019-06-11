import Vue from 'vue';
import Router from 'vue-router';
import News from './views/News/News.vue';
import CreateNew from './views/CreateNew/CreateNew.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/create-new',
      name: 'create-new',
      component: CreateNew
    },
  ],
});
