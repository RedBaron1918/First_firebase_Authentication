<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register" class="register">
      <input type="text" placeholder="email.." v-model="email" />
      <input type="password" placeholder="password.." v-model="password" />
      <input type="submit" value="register" /><br />
      <p>Have an account? <router-link to="/login">Login Here</router-link></p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
    },
  },
};
</script>

<style></style>
