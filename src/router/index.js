import Vue from 'vue';
import Router from 'vue-router';
import PageA from '../components/PageA';
import PageB from '../components/PageB';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'PageA',
      component: PageA
    }, {
      path: '/b',
      name: 'PageB',
      component: PageB
    }
  ]
});
