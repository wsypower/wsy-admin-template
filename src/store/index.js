import Vue from "vue";
import Vuex from "vuex";
import wadmin from "@/store/modules/w-admin/index.js";
import _ from "lodash";

Vue.use(Vuex);

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
const loadModules = () => {
  const files = require.context("./modules", true, /\.js$/);
  const storeModules = {};
  files.keys().forEach(key => {
    const namespacedKey = key
      .replace(/(\.\/|\.js)/g, "")
      .replace(/\/index/g, "");
    /**
     * 模块内部的 [action]、[mutation] 和 [getter] 默认情况下是带命名空间的模块
     * 这样具有更高的封装度和复用性
     * 如果想要绑定在全局命名空间就在模块内添加配置 namespaced: false
     */
    storeModules[namespacedKey] = _.merge(
      {
        namespaced: true
      },
      files(key).default
    );
  });
  return storeModules;
};
const storeModules = loadModules();

// TODO 此处模块导出有待思考
// 导出store模块
export default new Vuex.Store({
  modules: {
    "w-admin": wadmin,
    ...storeModules
  }
});
