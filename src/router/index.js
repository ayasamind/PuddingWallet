import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Login from '../components/Login';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import SendList from '../components/SendList';
import InputAddress from '../components/InputAddress';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/inputaddress',
      component: InputAddress,
      meta: {
        title: 'Input Address',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {
      path: '/sendlist',
      component: SendList,
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/login');

module.exports = router;
