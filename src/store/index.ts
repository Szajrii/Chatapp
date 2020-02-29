import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: '',
        email: '',
        requests: [],
        friendList: [],
        chats: {}
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user;
            state.email = payload.email
        },
        setRequests(state, requests) {
            state.requests = requests;
        },
        setFriendList(state, list) {
            state.friendList = list;
        },
        setChats(state, chats) {
            state.chats = chats;
        }
    },
    actions: {
    },
    modules: {
    }
})
