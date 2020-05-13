import Vue from 'vue'
import Vuex from 'vuex'

import student from '@/module/student.js'
import course from '@/module/course.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //公共数据池
    name: '邵楠',
    age: 18
  },
  modules: {
    course,
    student
  }
})
