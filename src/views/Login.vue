<template>
  <div class="register">
    <h1>Login</h1>
    <form @submit.prevent="register">
      <input
        type="email"
        class="register__input"
        placeholder="email"
        v-model="email"
      />
      <input
        type="password"
        class="register__input"
        placeholder="password"
        v-model="password"
      />
      <button type="submit">Enter</button>
    </form>

    <p>{{}}</p>
  </div>
</template>

<script>
// import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$router.replace({ name: "Home" });
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  },
};
</script>

<style>
.register__input {
  display: block;
  margin: 20px 0;
}
</style>
