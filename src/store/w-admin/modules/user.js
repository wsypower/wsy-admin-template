export default {
  namespaced: true,
  state: {
    // 用户信息
    info: {}
  },
  // 返回权限树
  getters: {
    roleRouter: state => {
      return state.info.router || [];
    }
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    async set({ state, dispatch }, info) {
      // store 赋值
      state.info = info;
      // 持久化
      await dispatch(
        "w-admin/db/set",
        {
          dbName: "sys",
          path: "user.info",
          value: info,
          user: true
        },
        { root: true }
      );
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    async load({ state, dispatch }) {
      // store 赋值
      state.info = await dispatch(
        "w-admin/db/get",
        {
          dbName: "sys",
          path: "user.info",
          defaultValue: {},
          user: true
        },
        { root: true }
      );
    }
  }
};
