<template>
  <vue-application></vue-application>
</template>

<script>
import ApplicationVue from './components/ApplicationVue.vue'

export default {
  name: 'App',
  components: {
    'vue-application': ApplicationVue
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
