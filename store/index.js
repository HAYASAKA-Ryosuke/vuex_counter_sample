import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  actions: {
		increment(state, value){
			state.commit('increment', value)
		},
		decrement(state, value){
			state.commit('decrement', value)
		}
	},
  mutations: {
    increment (state, value) {
      state.counter += value
    },
    decrement (state, value) {
      state.counter -= value
    }
  }
})
export default store
