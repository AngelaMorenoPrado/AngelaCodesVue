<template>
  <product-list-one :products="products"></product-list-one>
  <product-list-two :products="products"></product-list-two>
</template>

<script>

import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data() {
    return {
      products: [
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80}
      ]
    }
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
