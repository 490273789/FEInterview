<template>
    <div class="b2-wrapper">
        <h2>Brother2</h2>
        <span>From Brother1: {{b2Name}}</span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      b2Name: ''
    }
  },
  mounted () {
    this.$bus.$on('getB2Name', (val) => {
      this.b2Name = val
    })
  }
}
</script>

<style scoped>
.b2-wrapper {
        border: 1px solid #c1c1c1;
        margin: 5px;
        padding: 5px;
    }
</style>
