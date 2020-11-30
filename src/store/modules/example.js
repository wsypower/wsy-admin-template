export default {
  namespaced: false,
  state: {
    // 作为模块测试
    example: '这里测试stare单文件模块'
  },
  getters: {
    exampleGetters() {
      return '这里测试stare单文件模块'
    }
  }
}
