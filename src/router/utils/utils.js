/**
 * @description
 * 如果文件名有识别路由标识符，返回值就是识别符
 * 如果没有返回值是文件名
 * 路由标识符应该与frameIn中对象name值相同
 * @example
 * [./example.index.js] => [index]
 * [./example.js] => [example]
 *
 * @author wsy
 * @date 2020-12-02  15:43:59
 * @param {String} 路由文件相对路径
 * @returns {String} key值
 */
export const isMatchSuffix = routerPath => {
  let routerSuffixKey
  const MatchSuffixRegexp = routerPath.match(/\.([\w-])+\./g)
  if (MatchSuffixRegexp != null) {
    routerSuffixKey = MatchSuffixRegexp[0].replace(/\./g, '')
  } else {
    routerSuffixKey = routerPath.replace(/[\.\.js\/]/g, '')
  }

  return routerSuffixKey
}
