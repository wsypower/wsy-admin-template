import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state state
     */
    versionShow () {
      util.log.capsule(
        process.env.VUE_APP_PROJECT_NAME,
        `v${process.env.VUE_APP_VERSION}`
      )
    }
  }
}
