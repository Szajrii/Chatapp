import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Login from '../components/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router
