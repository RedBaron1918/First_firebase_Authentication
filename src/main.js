import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvFy7ERpOeiQyVp7j_10p8-KE79umIgsM",
    authDomain: "vue-auth-5ce44.firebaseapp.com",
    projectId: "vue-auth-5ce44",
    storageBucket: "vue-auth-5ce44.appspot.com",
    messagingSenderId: "586047321337",
    appId: "1:586047321337:web:58186be3208b9979461e28"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

createApp(App).use(router).mount('#app')
