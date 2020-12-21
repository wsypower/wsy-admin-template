export default {
  namespaced: false,
  state: {
    // 作为模块测试
    example: 'test'
  },
  getters: {
    test() {
      return '这里测试stare单文件模块'
    }
  }
}
