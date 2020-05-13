<template>
  <div class="home">
    Home
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  mounted () {
    console.log(this.$route)
    console.log(this.$router)
    console.log(this.$store)
  }
}
</script>
<style scoped>
/* scoped:设置作用域，只作用在此组件 */
  div {
    color: red;
  }
</style>

