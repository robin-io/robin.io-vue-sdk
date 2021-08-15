<template>
  <RobinChat />
</template>

<script>
import RobinChat from '../src/App.vue'

export default {
  name: 'App',
  components: {
    RobinChat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
