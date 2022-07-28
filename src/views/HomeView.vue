<template>
  <div class="home">
    <h1>Welcome to the worst Authentication {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      user: firebase.auth().currentUser,
      name: "",
    };
  },
  beforeMount() {
    if (this.user) {
      this.name = this.user.email.split("@")[0];
    }
  },
  methods: {
    Logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
<style scoped>
button {
  background: #385066;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  text-transform: uppercase;
}
button:hover {
  background: #425e79;
}
</style>
