import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "element-ui";
import "fullpage.js/vendors/scrolloverflow";
import VueFullpage from "vue-fullpage.js";

Vue.config.productionTip = false;

Vue.use(Button).use(VueFullpage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
