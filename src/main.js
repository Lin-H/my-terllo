import Trell from '@/lib/myTrell';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use({
  install: function(vue) {
    vue.prototype.trell = new Trell();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
