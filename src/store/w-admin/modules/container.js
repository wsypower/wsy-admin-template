export default {
  namespaced: true,
  state: {
    // 是否开启页面过度动画
    transition: 'rotate-sides',
    direction: 'left'
  },
  mutations: {
    // 切换container组件的动画朝向
    change(state, direction) {
      state.direction = direction
    }
  },
  actions: {
    /**
     * TODO 暂时先不做,看具体需求
     * @description 设置动画状态
     * @param {Object} context
     * @param {String} path 获取路径
     */
    changeDirectionTransition({ commit }, path) {}
  }
}
