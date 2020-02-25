import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Main from '../views/Main.vue';
import FriendsManagement from '../regions/chatregion/friendsmanagement/FriendsManagement.vue'

Vue.use(VueRouter);

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
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]
    },
    {
        path: '/app',
        name: 'main',
        component: Main,
        children: [
            {
                path: '/app/friendslist',
                name: 'friends',
                component: FriendsManagement
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router
