import Vue from 'vue'
import Vuex from 'vuex'

import wadmin from './w-admin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'w-admin': wadmin
  }
})
