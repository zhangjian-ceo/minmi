import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Button } from 'vant';
import VueLazyload from "vue-lazyload";
import LyTab from 'ly-tab'

import './assets/css/normalize.css'
import './assets/css/reset.css'
import './assets/js/rem'
import './assets/css/font/iconfont.css'

Vue.use(LyTab)
Vue.use(VueLazyload)
Vue.use(Vant)
Vue.use(Button);
// Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
