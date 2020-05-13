// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 是想$bus原理
// class Bus {
//   constructor () {
//     this.callback = {}
//   }
//   $on (name, fn) {
//     this.callback[name] = this.callback[name] || []
//     this.callback[name].push(fn)
//   }
//   $emit (name, val) {
//     if (this.callback[name]) {
//       this.callback[name].forEarch(cb => cb(val))
//     }
//   }
// }

// boardcast 向下传递
Vue.prototype.$boardcast = function (eventName, data) {
  boardcast.call(this, eventName, data)
}
function boardcast (eventName, data) {
  this.$children.forEarch(children => {
    children.$emit(eventName, data)
    if (children.$children.length) {
      boardcast.call(children, eventName, data)
    }
  })
}

// dispatch 向上传递
Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
