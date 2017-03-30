import Vue from 'vue';
import Router from 'vue-router';
import login from '@/router/login';
import boards from '@/router/boards';
import list from '@/router/list';
import card from '@/router/card';

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
    },
    {
      path: '/card/:cardId',
      name: 'card',
      component: card
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
});
