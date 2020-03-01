import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: '',
        email: '',
        requests: [],
        friendList: [],
        chats: {},
        chatsAvailable: false
    },
    mutations: {
        unlockChats(state) {
            state.chatsAvailable = true;
        },
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
    getters: {
        getChat: (state) => (userName: string) => {
            // @ts-ignore
            return state.chats[userName];
        }
    },
    actions: {
    },
    modules: {
    }
})
