function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      console.log([componentName, eventName].concat([params]))
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      // console.log(1)
      let parent = this.$parent
      let name = parent.$options.name
      // 判断当前parent是否是需要parent
      while (parent && (!name || name !== componentName)) {
        console.log(parent)

        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
          console.log(name)
        }
      }
      // 找到对应的parent
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
