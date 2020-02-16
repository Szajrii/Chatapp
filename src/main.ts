import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./styles/index.scss');
import 'bootstrap';
import firebaseConfig from './firebaseconfig/index'
import firebase from 'firebase';
import {AuthController} from "@/controllers/usercontrollers/AuthController";

firebase.initializeApp(firebaseConfig);
AuthController.auth = firebase.auth();
AuthController.db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
