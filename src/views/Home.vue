<template>
  <div class="home">
    <p v-if="loggedIn">Logged In</p>
    <p v-else>No User</p>

    <h1>Home page</h1>
    <button @click="signOut">logOut</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "Home",
  data() {
    return {
      loggedIn: false,
    };
  },
  components: {},
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      // if(user) {
      //   this.loggedIn = true
      // }else {
      //   this.loggedIn = false
      // }
    });
  },

  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.replace({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
