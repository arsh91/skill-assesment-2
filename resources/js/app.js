//import './bundle';
import {createApp} from "vue";
import Welcome from "./Welcome.vue";
import Favorites from "./Favorites.vue";
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
createApp(Welcome, Favorites).mount("#app");