<template>
    <div class="wrapper">
        <h2>Chilid1</h2>
<!--        <p>{{demo}}</p>-->
        <ch2 />
    </div>
</template>

<script>
import ch2 from '@/components/communication/provide-inject/Child2'
export default {
  // inject: ['for'],
  data () {
    return {
      demo: this.for
    }
  },
  components: {
    ch2
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
