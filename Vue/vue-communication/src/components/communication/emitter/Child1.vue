<template>
    <div class="wrapper">
        <h2>Child1</h2>
        <ch2 />
    </div>
</template>

<script>
import ch2 from '@/components/communication/emitter/Child2'
export default {
  child: 'child1',
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
