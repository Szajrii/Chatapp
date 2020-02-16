import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: '',
        email: ''
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user;
            state.email = payload.email
        }
    },
    actions: {
    },
    modules: {
    }
})
