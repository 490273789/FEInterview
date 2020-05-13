<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      username: 'uf046981'
    }
  },
  methods: {
    getUsername () {
      this.username = 'uf046980'
    }
  }
}
</script>

<style>

</style>
