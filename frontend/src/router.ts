import Vue from 'vue';
import Router from 'vue-router';
import Today from '@/views/task_views/Today.vue';
import All from '@/views/task_views/All.vue';
import Upcoming from '@/views/task_views/Upcoming.vue';
import Project from '@/views/task_views/Project.vue';
import Tag from '@/views/task_views/Tag.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/today',
    },
    {
      path: '/today',
      name: 'today',
      component: Today,
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming,
    },
    {
      path: '/all',
      name: 'all',
      component: All,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project,
    },
    {
      path: '/tag/:id',
      name: 'tag',
      component: Tag,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
  ],
});
