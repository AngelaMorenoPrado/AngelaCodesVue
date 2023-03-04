<template>
  <application-vue></application-vue>
</template>

<script>
import ApplicationVue from './components/ApplicationVue.vue'

export default {
  name: 'App',
  components: {
    'application-vue': ApplicationVue
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
