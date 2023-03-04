<template>
  <div id="ApllicationVue">
    <input type="text" v-model="activityName" placeholder="Add activity here"/>
    <button @click="addActivity">Add activity</button>
    <ul>
      <li v-for="plan in plans" :key="plan.name">
        <span>{{plan.name}} - </span>
        <button @click="incrementVote(plan.id)">👍</button>
        {{plan.votes}}
        <button @click="decrementVote(plan.id)">👎</button>
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
      incrementVote: (id) => store.dispatch('incrementVote', id),
      decrementVote: (id) => store.dispatch('decrementVote', id),
      //addActivity: (activity) => store.dispatch('addActivity', activity)
    }
  },
  data() {
    return {
      activityName: ''
    }
  },
  methods: {
    addActivity: function()
    {
      console.log('this')
      console.log(this.activityName)
      this.$store.dispatch('addActivity', this.activityName);
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
