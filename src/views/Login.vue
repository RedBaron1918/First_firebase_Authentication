<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login" class="register">
      <input type="text" placeholder="email.." v-model="email" />
      <input type="password" placeholder="password.." v-model="password" />
      <input type="submit" value="login" /><br />
      <p>
        Need an account? <router-link to="/register">Register Here</router-link>
      </p>
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
    Login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    },
  },
};
</script>

<style>
h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}
input:focus:not([type="submit"]) {
  opacity: 1;
}
input::placeholder {
  color: inherit;
}
form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}
form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}
form.login input[type="submit"] {
  background: #33485c;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.register input[type="submit"] {
  background: #33485c;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.register input[type="submit"]:hover {
  background: #3d576e;
}
</style>
