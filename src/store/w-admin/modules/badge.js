import api from '@/api'
import setting from '@/setting'
export default {
  namespaced: true,
  state: {
    badge: 0,
    data: 0
  },

  mutations: {
    setBadge(state, { badgeNum, data }) {
      state.badge = badgeNum
      state.data = data
    }
  },

  actions: {
    async getBadge({ commit }) {
      if (!setting.tool.notification) {
        return
      }
      let interval
      clearInterval(interval)
      interval = setInterval(async () => {
        const { badgeNum, data } = await api.DEMO_SOCKET()
        commit('setBadge', { badgeNum, data })
      }, 5000)
    }
  }
}
