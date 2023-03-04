import { createStore } from 'vuex';

export const store = createStore({
    state(){
        return {
            plans: [
                {name: 'Going snowboarding', votes: 0}
            ]
        }
    },
    getters: {},
    mutations: {},
    actions: {}
})