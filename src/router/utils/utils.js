const path = require('path')

/**
 * @description
 * 获取文件dirname和filename
 * @author wsy
 * @date 2020-12-23  23:02:41
 * @param {String} routerPath 文件路径
 */
const getDirNameAndFileName = routerPath => ({
  modulesPathDir: path.dirname(routerPath).replace(/\.\/?/, ''),
  modulePathFileName: path.basename(routerPath, path.extname(routerPath))
})

/**
 * @description
 * 收集modules内的路由
 * 只抓取文件或模块内index文件
 * @author wsy
 * @date 2020-12-23  23:05:42
 */
export default (() => {
  const routerContext = require.context('.././modules', true, /\.js$/)
  return routerContext
    .keys()
    .reduce((collectRouterModules, modulesRoutePath) => {
      const { modulesPathDir, modulePathFileName } = getDirNameAndFileName(
        modulesRoutePath
      )
      // 如果有router模块如果有dir，就只抓取文件夹下的index
      if (modulesPathDir && modulePathFileName !== 'index') {
        return collectRouterModules
      }
      const routerModules = routerContext(modulesRoutePath)
      return collectRouterModules.concat(routerModules.default || routerModules)
    }, [])
})()
