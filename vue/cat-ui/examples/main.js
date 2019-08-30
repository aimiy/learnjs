import Vue from 'vue'
import App from './App.vue'
import router from './router'
import catUI from "../packages/index.js";

Vue.use(catUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
