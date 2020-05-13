<template>
    <div class="son1">
        <h2>Son1</h2>
        <p>From Parent: {{count}}</p>
        <div>$attrs: {{$attrs}}</div>
        <button @click='changeParent' >ChangeParent</button>
        <son2 v-bind="$attrs" v-on="$listeners" son2="Son2Attr"/>
    </div>
</template>

<script>
import son2 from '@/components/communication/listener-attrs/Son02.vue'
export default {
  name: 'son1',
  props: {
    count: {
      default: 1
    }
  },
  inheritAttrs: false,
  data () {
    return {
      sonCount: 1
    }
  },
  components: {
    son2
  },
  methods: {
    changeParent () {
      this.$emit('changeParentC1', this.sonCount)
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
