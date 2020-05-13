<template>
    <div class="wrapper">
        <p>中央事件总线</p>
        <br1 />
        <br2 />
    </div>
</template>

<script>
import br1 from '@/components/communication/bus/brother1'
import br2 from '@/components/communication/bus/brother2'
export default {
  components: {
    br1,
    br2
  }
}
</script>

<style scoped>
    .wrapper {
        border: 1px solid #c1c1c1
    }
</style>
