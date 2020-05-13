<template>
  <div class="pWrapper">
    <div class="parents1">
      <span>Im Parent:</span>
      <input type="text" v-model="pCount" />
      <div>From Son: {{sCount}}</div>
    </div>

    <son :count="pCount" desc="父组件的字符串属性" @childHandel="changeCount" />
  </div>
</template>

<script>
import son from '@/components/communication/parent-son/Son.vue'
export default {
  name: 'parent1',
  data () {
    return {
      pCount: '1',
      sCount: 1
    }
  },
  components: {
    son
  },
  methods: {
    changeCount (val) {
      this.sCount += val
    }
  }
}
</script>

<style scoped>
.pWrapper {
  border: 1px solid #c1c1c1;
  padding: 5px;
}
/* .parents1 {
        border: 1px solid #c1c1c1;
        padding: 5px;
        margin: 3px;
    } */
</style>
