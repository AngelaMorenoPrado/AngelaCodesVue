<template>
    <div id='ProductListOne'>
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in halfPriceProducts" :key="product.name">
                <span class='name'>{{ product.name }} - </span>
                <span class='price'>{{ product.price }}</span>
            </li>
        </ul>
        <button @click="asyncReducePrice(4)">Reduce Price</button>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from 'vue'

export default {
    name: 'ProductListOne',
    setup() {
        const store = useStore()

        return {
            products: computed(() => store.state.products),
            halfPriceProducts: computed(() => store.getters.getHalfPrice),
            reducePrice: () => store.commit('reducePrice'),
            asyncReducePrice: (amount) => store.dispatch('reducePrice', amount)
        }
    },
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>