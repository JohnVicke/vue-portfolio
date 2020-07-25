import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueWindowSize from "vue-window-size";
import i18n from "./i18n";

Vue.prototype.$sm = 600;
Vue.prototype.$md = 960;

Vue.config.productionTip = false;

Vue.use(VueWindowSize);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
