<template>
  <router-view />
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      route: useRoute(),
      router: useRouter(),
    };
  },
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.router.replace("/login");
      } else if (
        this.route.path === "/login" ||
        this.route.path === "/register"
      ) {
        this.router.replace("/");
      }
    });
  },
};
</script>

<style>
body {
  background: #2c3e50;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: inherit;
}
</style>
