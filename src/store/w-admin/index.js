/*
 * @description 收集模板下的各模块
 * @Author: wsy
 * @Date: 2020-11-Mo 07:26:20
 * @Last Modified by:   wsy
 * @Last Modified time: 2020-11-Mo 07:26:20
 */

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default {
  namespaced: true,
  modules
}
