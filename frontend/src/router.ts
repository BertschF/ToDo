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
      redirect: '/today',
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
      path: '/projects',
      name: 'projects',
      component: Home, // TODO: change this
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Home, // TODO: change this
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
