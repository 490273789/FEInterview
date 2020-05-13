import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.bus = new Vue();//事件总线
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
