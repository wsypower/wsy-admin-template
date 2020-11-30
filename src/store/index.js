import Vue from 'vue'
import Vuex from 'vuex'
import wadmin from './w-admin'
Vue.use(Vuex)

/**
 * @description 收集modules文件下的store模块
 * 模块名为js文件名称,如果模块是文件夹则为文件夹名称为模块名
 *
 * @example
 * 单位件
 * [example.js] => 模块名为[example]
 * 文件夹
 * [example/index.js] => 模块名为[example]
 *
 * @author wsy
 * @date 2020-11-30  18:53:11
 */
const collectModules = () => {
  const files = require.context('./modules', true, /\.js$/)
  const storeModules = {}
  files.keys().forEach(key => {
    const namespacedKey = key
      .replace(/(\.\/|\.js)/g, '')
      .replace(/\/index/g, '')
    storeModules[namespacedKey] = files(key).default
  })
  return storeModules
}
const storeModules = collectModules()

// 导出store模块
export default new Vuex.Store({
  modules: {
    'w-admin': wadmin,
    ...storeModules
  }
})
