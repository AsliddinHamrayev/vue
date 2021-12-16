import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDC17MsyqPOIycZZ7HyRrTJLdb__rTC9OI",
  authDomain: "test1-982b9.firebaseapp.com",
  projectId: "test1-982b9",
  storageBucket: "test1-982b9.appspot.com",
  messagingSenderId: "286235432488",
  appId: "1:286235432488:web:8bb2eaf0952ee100ebc71d",
  measurementId: "G-200QX5X4X0",
};

firebase.initializeApp(firebaseConfig);
let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    new Vue({
      router,
      store,
      render: function (h) {
        return h(App);
      },
    }).$mount("#app");
  }
});
