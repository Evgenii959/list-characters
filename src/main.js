import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/index.js';
import '../src/assets/styles/global.scss';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
