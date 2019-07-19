import Vue from 'vue'
import App from './App.vue'

import catUI from "../packages/index.js";
Vue.use(catUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
