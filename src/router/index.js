import Vue from 'vue';
import Router from 'vue-router';
import boards from '@/router/boards';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boards',
      component: boards,
    },
  ],
});
