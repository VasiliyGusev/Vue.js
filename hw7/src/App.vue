<template>
  <div id="app">
    <CalcuLator msg="Calculator" />
  </div>
</template>

<script>
import CalcuLator from '@/components/CalcuLator.vue'

export default {
  name: 'App',
  components: {
    CalcuLator
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
