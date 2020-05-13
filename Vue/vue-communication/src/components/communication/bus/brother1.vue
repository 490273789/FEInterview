<template>
    <div class="b1-wrapper">
        <h2>Brother1</h2>
        <span>name:</span>
        <input type="text" v-model="b1Name" @change="setB2Name">
    </div>
</template>

<script>
export default {
  name: 'brother1',
  data () {
    return {
      b1Name: 'IM Brother1'
    }
  },
  methods: {
    setB2Name () {
      console.log(this)
      console.log(this.$bus)
      this.$bus.$emit('getB2Name', this.b1Name)
    }
  }
}
</script>

<style scoped>
    .b1-wrapper {
        border: 1px solid #c1c1c1;
        margin: 5px;
        padding: 5px;
    }
</style>
