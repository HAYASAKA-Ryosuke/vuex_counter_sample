<template>
    <div>
      {{ counter }}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>

</template>

<script>

import {mapState} from 'vuex'
export default {
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment', 1)
    },
    decrement () {
      this.$store.dispatch('decrement', 1)
    }
  }
}
</script>

<style>
</style>
