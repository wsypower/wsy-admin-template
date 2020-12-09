/**
 * 可以在这个网址选取一类动画
 * @see https://webcodefarmer.github.io/vue-transition.css/dist/index.html#/scaleDownToUp
 *
 * 推荐 left: 'rotate-glue-left-to-right'
 *     right: 'rotate-glue-right-to-left'
 */
const ANIMATION_ARR = {
  left: 'rotate-sides',
  right: 'rotate-sides'
}

export default {
  namespaced: true,
  state: {
    // 是否开启页面过度动画
    transition: 'rotate-sides'
  },
  mutations: {
    // 切换container组件的动画朝向
    change(state, direction) {
      state.transition = direction
    }
  },
  actions: {
    /**
     * @description 设置动画状态
     * @param {Object} context
     * @param {String} path 获取路径
     */
    changeAnimation({ commit }, { oldIndex, newIndex }) {
      return new Promise((resolve, reject) => {
        const direction =
          oldIndex < newIndex ? 'right' : oldIndex === newIndex ? '' : 'left'
        const animate = ANIMATION_ARR[direction]
        commit('change', animate)
        resolve()
      }).catch(err => {
        throw new Error(err)
      })
    }
  }
}
