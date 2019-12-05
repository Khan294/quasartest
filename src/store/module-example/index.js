/* import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions' */

const state = {
  testState: 'Not working.'
}
const actions = {
  setState ({ commit }) {
    try {
      commit('SET', 'Working.')
    } catch (e) {
      console.log(e.message)
    }
  }
}

const mutations = {
  SET (state, value) {
    state.testState = value
  }
}

export default {
  namespaced: true,
  // getters,
  mutations,
  actions,
  state
}
