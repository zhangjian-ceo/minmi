import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Classify from "../views/classify/Classify";
import Mine from "../views/mine/Mine";
import Shopping from "../views/shopping/Shopping";

import ListDetails from "../views/home/children/ListDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/classify",
    name: "classify",
    component: Classify,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/shopping",
    name: "shopping",
    component: Shopping,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/listdetails",
    name: "ListDetails",
    component: ListDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
