import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

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
        },
        decrementPlan(state, payload)
        {
            state.plans.forEach(plan => {
                plan.id === payload ? plan.votes -= 1 : ''
            })
        },
        addActivity(state, payload)
        {
            state.plans.push({id: 2, name: payload, votes: 0})
        }
    },
    actions: {
        incrementVote(context, payload)
        {
            context.commit('incrementPlan', payload)
        },
        decrementVote(context, payload)
        {
            context.commit('decrementPlan', payload)
        },
        addActivity(context, payload)
        {
            context.commit('addActivity', payload)
        }
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })]
})