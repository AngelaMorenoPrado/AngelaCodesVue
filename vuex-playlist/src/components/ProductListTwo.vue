<template>
    <div id='ProductListTwo'>
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products" :key="product.name">
                <span class='name'>{{ product.name }}</span>
                <span class='price'>{{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductListTwo',
    props: ['products'],
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