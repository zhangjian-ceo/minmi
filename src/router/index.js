import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Classify from "../views/classify/Classify";
import Mine from "../views/mine/Mine";
import Shopping from "../views/shopping/Shopping";
import Address from "../views/mine/children/Address";
import NewAddress from "../views/mine/children/NewAddress";

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
  {
    path: "/address",
    name: "address",
    component: Address
  },
  {
    path: "/newAddress",
    name: "newAddress",
    component: NewAddress
  }

];

const router = new VueRouter({
  routes
});

export default router;
