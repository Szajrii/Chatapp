import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: ''
    },
    mutations: {
        setUser(state, name) {
            state.user = name;
        }
    },
    actions: {
    },
    modules: {
    }
})
