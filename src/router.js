import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import News from './views/News/News.vue';
import CreateNew from './backoffice/views/CreateNew/CreateNew.vue';
import NewsList from './backoffice/views/News/News.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
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
    ]
});
//# sourceMappingURL=router.js.map