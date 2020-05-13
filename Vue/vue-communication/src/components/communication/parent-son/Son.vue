<template>
    <div class="son1">
        <span>Im Son:</span>
        <span>{{count}}</span>
        <div>From Parent:{{desc}}</div>
        <button @click='changeParent'>ChangeParent1</button>
    </div>
</template>

<script>
export default {
  name: 'son',
  props: {
    count: {
      default: 1
    },
    desc: {}
  },
  data () {
    return {
      sonCount: 1
    }
  },
  methods: {
    changeParent () {
      this.$emit('childHandel', this.sonCount)
    }
  }
}
</script>

<style scoped>
    .son1 {
        border: 1px solid #c1c1c1;
        padding: 5px;
        margin: 5px;
    }
</style>
