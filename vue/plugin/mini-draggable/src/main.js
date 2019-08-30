import Vue from 'vue'
import App from './App.vue'
import catUI from 'cat-ui-f'
import '../../../cat-ui/lib/cat-ui.css'
Vue.use(catUI);
console.log(catUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
