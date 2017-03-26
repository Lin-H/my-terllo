import Vue from 'vue';
import Router from 'vue-router';
import boards from '@/router/boards';
import list from '@/router/list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boards',
      component: boards,
    },
    {
      path: '/list/:boardId',
      name: 'list',
      component: list
    }
  ],
});
