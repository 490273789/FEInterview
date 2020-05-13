<template>
    <div class="wrapper">
        <h1>Parent</h1>
        <h2>Dispatch & Broadcast</h2>
        <p>From Child2: {{count}}</p>
        <button @click="handleBroadcast">Broadcast</button>
        <ch1 />
    </div>
</template>

<script>
import ch1 from '@/components/communication/emitter/Child1'
import Emitter from '@/mixins/Emitter.js'
export default {
  name: 'parent',
  mixins: [Emitter],
  data () {
    return {
      count: 1
    }
  },
  components: {
    ch1
  },
  methods: {
    handleBroadcast () {
      this.broadcast('child2', 'changeCount', 1)
    }
  },
  mounted () {
    this.$on('changeCount', val => {
      console.log(2)
      this.count += val
    })
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
