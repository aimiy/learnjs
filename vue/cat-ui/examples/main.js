import Vue from 'vue'
import App from './App.vue'

import  Toast  from "../packages/index.js";
Vue.use(Toast);

Vue.prototype.$toast = Toast

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
