import { createStore } from 'vuex';

export const store = createStore({
    state(){
        return {
            plans: [
                {id: 1, name: 'Going snowboarding', votes: 0}
            ]
        }
    },
    getters: {},
    mutations: {
        incrementPlan(state, payload)
        {
            state.plans.forEach(plan => {
                plan.id === payload ? plan.votes += 1 : ''
            });
        }
    },
    actions: {
        incrementVote(context, payload)
        {
            context.commit('incrementPlan', payload)
        }
    }
})