import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/today',
      name: 'home',
      component: Home,
    },
    {
      path: '/upcoming',
      name: 'home',
      component: Home,
    },
    {
      path: '/all',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
