<template>
    <div class="wrapper">
        <h1>Parent</h1>
        <button @click="changeChild">change</button>
        <ch1 />
    </div>
</template>

<script>
// 使用provide-inject进行数据的改变不会触发系统的响应式
import ch1 from '@/components/communication/provide-inject/Child1'
export default {
  // provide: {
  //   for: 'Parent'
  // },
  data () {
    return {
      count: 1
    }
  },
  components: {
    ch1
  },
  methods: {
    changeChild () {
      this.count += 1
      this.for = this.count
      console.log(this.for)
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
