import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Classify from "../views/classify/Classify";
import Mine from "../views/mine/Mine";
import Shopping from "../views/shopping/Shopping";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/classify",
    name: "classify",
    component: Classify
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine
  },
  {
    path: "/shopping",
    name: "shopping",
    component: Shopping
  },

];

const router = new VueRouter({
  routes
});

export default router;
