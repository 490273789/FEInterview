<template>
    <div class="son2">
        <h3>Son2</h3>
        <span>From Parents: {{pSon2}}</span>
        <div>From Parents:{{desc}}</div>
        <div>$attrs:{{$attrs}}</div>
        <button @click='changeParentC2'>ChangeParent1</button>
        <button @click='$listeners.son2Handel(7)'>ChangeParent2</button>
    </div>
</template>

<script>
export default {
  name: 'son2',
  props: {
    'pSon2': {
      default: 1
    },
    'desc': {}
  },
  data () {
    return {
      son2Count: 1
    }
  },
  methods: {
    changeParentC2 () {
      this.$emit('son2Handel', this.son2Count)
    }
  }
}
</script>

<style scoped>
    .son2 {
        border: 1px solid #c1c1c1;
        padding: 5px;
        margin: 5px;
    }
</style>
