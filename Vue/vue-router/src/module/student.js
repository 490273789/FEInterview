export default {
    namespaced: true,
    state: {
      studentList: []
    },
    getters: {
          //相当于计算属性
          newStudent (state,getters) {
            return state.studentList.map( (item, index) => {
              if(index == 0 ) {
                return '**' + item + getters.a
              } else if( index < 3) {
                return item + '**'
              } else {
                return '++' + item + '++'
              }
            })
          },
      
          a () {
            return '帅'
          }
    },
    mutations: {
          //修改state中的数据需要在此对象中进行修改
          changeStudent (state,{name,number}) {
            state.studentList.push(name+number)
          }
    },
    actions: {
        //执行异步操作
        changeStudent (ctx,{name, number}) {
          setTimeout(() => {
            ctx.commit('changeStudent', {name, number})
          },1000)
          
        }
    }
  }