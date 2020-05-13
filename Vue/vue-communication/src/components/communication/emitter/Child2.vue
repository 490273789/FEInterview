<template>
  <div class="wrapper">
    <h2>Child2</h2>
    <p>From Parent: {{demo}}</p>
    <button @click="handleDispatch">Dispatch</button>
  </div>
</template>

<script>
import Emitter from '@/mixins/Emitter.js'
export default {
  name: 'child2',
  mixins: [Emitter],
  data () {
    return {
      demo: 1
    }
  },
  mounted () {
    this.$on('changeCount', val => {
      this.demo += val
    })
  },
  methods: {
    handleDispatch () {
      this.dispatch('parent', 'changeCount', 1)
    }
  }
}
</script>

<style scoped>
.wrapper {
  border: 1px solid #c1c1c1;
  margin: 5px;
  padding: 5px;
}
</style>
