<template>
  <div class="pWrapper">
    <div class="parents1">
      <h1>Im Parent</h1>
      <div>From Son: {{pCount}}</div>
      <button @click="changeSon(0)">changeSon1</button>
      <button @click="changeSon(1)">changeSon2</button>
    </div>

    <son1 />
    <son2 />
  </div>
</template>

<script>
import son1 from '@/components/communication/children/Son1.vue'
import son2 from '@/components/communication/children/Son2.vue'
export default {
  name: 'parent1',
  data () {
    return {
      pCount: 1
    }
  },
  components: {
    son1,
    son2
  },
  methods: {
    changeSon (val) {
      console.log(this.$children)
      this.$children[val].sonCount += 1
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
