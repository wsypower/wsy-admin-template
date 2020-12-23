import util from '@/libs/util'
const path = require('path')
/**
 * @description
 * 通过path去除basename
 * 有后缀的返回后缀，没有就返回basename
 * @param {String} 路由文件相对路径
 * @returns {String} key值
 */
const getPathBaseName = routerPath => {
  const pathBaseName = path
    .basename(routerPath, path.extname(routerPath))
    .split('.')
  console.log(pathBaseName)
  return pathBaseName[pathBaseName.length - 1]
}

/**
 * @description
 * 收集modules中的路由
 * @author wsy
 * @date 2020-12-02  20:57:21
 */
const collectRouter = () => {
  const routerContext = require.context('.././modules', true, /\.js$/)
  return routerContext
    .keys()
    .reduce((collectRouterModules, modulesRoutePath) => {
      // 获取路由标识符
      const routerKey = getPathBaseName(modulesRoutePath)
      const routerModules = routerContext(modulesRoutePath)
      // 如果文件为导出为空对象跳过
      if (!Object.keys(routerModules).length) {
        // 书写错误提示
        routerError(modulesRoutePath)
        return collectRouterModules
      }
      // 兼容 import export 和 require module.export 两种规范
      // FIX:如果modules内已经挂载key值就合并数组
      collectRouterModules[routerKey] = (
        collectRouterModules[routerKey] || []
      ).concat(routerModules.default || routerModules)
      console.log(collectRouterModules)
      return collectRouterModules
    }, {})
}

/**
 * @description
 * 将Modules收集来的router做切分,frameIn中有同名name的切入第一数组,其余放入第二数组
 * @author wsy
 * @date 2020-12-02  20:56:33
 * @param {Object} routerModules 收集router数组
 * @param {Array} frameIn 主框架路由
 */
const chunkModulesRouter = (routerModules, frameIn) => {
  return Object.keys(routerModules).reduce(
    (modulesKeys, key) => {
      const FrameRouterIncludes = frameIn.findIndex(r => r.name === key)
      modulesKeys[~FrameRouterIncludes ? 0 : 1].push(key)
      return modulesKeys
    },
    [[], []]
  )
}
/**
 * @description
 * 将name和key相同的挂载入主路由对应children中，不同的作为主路由混入
 * @author wsy
 * @date 2020-12-02  20:54:40
 * @param {Array} modulesKeys 切分后收集数组
 * @param {Object} routerModules 收集router数组
 * @param {Array} frameIn 主框架路由
 */
const frameInConcatModules = (modulesKeys, routerModules, frameIn) => {
  return frameIn.reduce((frameInRouter, router) => {
    // 只需要匹配 modulesKeys[0] 内的router
    const key = modulesKeys[0].findIndex(k => k === router.name)
    if (~key) {
      router.children = [
        ...(Array.isArray(router.children) ? router.children : []),
        ...routerModules[modulesKeys[0][key]]
      ]
      frameInRouter.push(router)
    }
    return frameInRouter
    // reduce 第一个参数放frameInRouterModulesKey[1],混入主框架内
  }, [].concat(...modulesKeys[1].map(k => routerModules[k])))
}

/**
 * 抛错处理
 */
const routerError = route => {
  if (process.env.NODE_ENV !== 'development') return
  util.log.capsule('router模块', 'Warning', 'warning')
  util.log.warning('---------------------------------------')
  util.log.warning(`router/modules目录:${route.replace('./', '')} 导出对象为空`)
  util.log.warning('---------------------------------------')
}

export {
  getPathBaseName,
  routerError,
  collectRouter,
  chunkModulesRouter,
  frameInConcatModules
}
