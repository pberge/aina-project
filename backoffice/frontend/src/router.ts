import Vue from 'vue';
import Router from 'vue-router';
import News from './views/News/News.vue';

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
  ],
});
