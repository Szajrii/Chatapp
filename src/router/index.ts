import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Main from '../views/Main.vue';
import FriendsManagement from '../regions/chatregion/friendsmanagement/FriendsManagement.vue'
import ChatWindow from "@/regions/chatregion/chatwindow/ChatWindow.vue";

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
        path: '/:email',
        name: 'main',
        component: Main,
        props: true,
        children: [
            {
                path: 'friendslist',
                name: 'friends',
                props: true,
                component: FriendsManagement
            },
            {
                path: 'chat=:user',
                name: 'chat',
                props: true,
                component: ChatWindow
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router
