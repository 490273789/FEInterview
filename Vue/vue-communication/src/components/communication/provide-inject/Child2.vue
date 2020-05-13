<template>
  <div class="wrapper">
    <h2>Chilid2</h2>
    <p>{{demo}}</p>
    <p>{{app.username}}</p>
    <button @click="handleUsername">changeUsername</button>
  </div>
</template>

<script>
export default {
  // inject: ['for'],
  inject: ['app'],
  data () {
    return {
      demo: this.app.username
    }
  },
  methods: {
    handleUsername () {
      this.app.getUsername()
    }
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
