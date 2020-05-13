<template>
    <div class="pWrapper">
        <div class="parents1">
             <h1>Parent</h1>
        <span>ChangeSon1</span>
        <input type="text" v-model="pCount1">
        <span>ChangeSon2</span>
        <input type="text" v-model="pCount2">
        <div>From Son1: {{s1Count}}</div>
         <div>From Son2: {{s2Count}}</div>
        </div>

        <son1 :count="pCount1" desc="父组件的字符串属性" :pSon2='pCount2' @changeParentC1='changeSon1Count' @son2Handel='changeSon2Count' />
    </div>
</template>

<script>
import son1 from '@/components/communication/listener-attrs/Son01.vue'
export default {
  name: 'parent1',
  data () {
    return {
      pCount1: '1',
      pCount2: '1',
      s1Count: 1,
      s2Count: 1,
      pName: 'Parent'
    }
  },
  components: {
    son1
  },
  methods: {
    changeSon1Count (val) {
      this.s1Count += val
    },
    changeSon2Count (val) {
      this.s2Count += val
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
