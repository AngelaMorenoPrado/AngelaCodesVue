import { createStore } from "vuex";

export const store = createStore({
    state () {
        return {
            products: [
                {name: 'Banana Skin', price: 20},
                {name: 'Shiny Star', price: 40},
                {name: 'Green Shells', price: 60},
                {name: 'Red Shells', price: 80}
            ]
        }
    },
    getters: {
        getHalfPrice(state)
        {
            const halfPrice = state.products.map(product => {
                return {
                    name: product.name,
                    price: product.price / 2
                }
            });

            return halfPrice;
        }
    },
    mutations: {
        reducePrice(state)
        {
            state.products.forEach( product => {
                product.price -= 1;
            })
        }
    }
});