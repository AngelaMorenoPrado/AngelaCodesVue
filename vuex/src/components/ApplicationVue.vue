<template>
  <div id="ApllicationVue">
    <input type="text" placeholder="Add activity here"/>
    <button>Add activity</button>

    <ul>
      <li v-for="plan in plans" :key="plan.name">
        <span>{{plan.name}} - </span>
        <button @click="incrementVote(plan.id)">👍</button>
        {{plan.votes}}
        <button>👎</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from 'vue'

export default {
  name: 'ApplicationVue',
  props: {
  },
  setup()
  {
    const store = useStore()

    return {
      plans: computed(() => store.state.plans),
      incrementVote: (id) => store.dispatch('incrementVote', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
