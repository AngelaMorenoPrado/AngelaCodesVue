<template>
    <div id='ProductListTwo'>
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in halfPrice" :key="product.name">
                <span>{{product.name}} - </span>
                <span>{{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {useStore} from "vuex"
import {computed} from "vue"

export default {
    name: 'ProductListTwo',
    props: [],
    setup() {
        const store = useStore();

        return {
            products: computed(() => store.state.products),
            halfPrice: computed(() => store.getters.getHalfPrice)
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