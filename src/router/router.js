import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Character from '../pages/Character.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/list-characters/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/list-characters/:id',
      name: 'Character',
      component: Character,
    },
  ],
});
