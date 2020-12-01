import Cookies from 'js-cookie'

// 项目名称
const PROJECT_NAME = process.env.VUE_APP_PROJECT_NAME || 'wsy'
// 项目版本号
const VERSION = process.env.VUE_APP_VERSION
class COOKIES {
  // 命名空间前缀
  NAMESPACE_PREFIX = `${PROJECT_NAME}-${VERSION}`

  /**
   * @description 存储 cookie 值
   * @param {String} name cookie name
   * @param {String} value cookie value
   * @param {Object} setting cookie setting
   */
  set(name = 'default', value = '', cookieSetting = {}) {
    // 默认属性
    const currentCookieSetting = {
      expires: 1 // 1天
    }
    Object.assign(currentCookieSetting, cookieSetting)
    Cookies.set(`${this.NAMESPACE_PREFIX}-${name}`, value, currentCookieSetting)
  }

  /**
   * @description 拿到 cookie 值
   * @param {String} name cookie name
   */
  get(name = 'default') {
    return Cookies.get(`${this.NAMESPACE_PREFIX}-${name}`)
  }

  /**
   * @description 拿到 cookie 全部的值
   */
  getAll() {
    return Cookies.get()
  }

  /**
   * @description 删除 cookie
   * @param {String} name cookie name
   */
  remove(name = 'default') {
    return Cookies.remove(`${this.NAMESPACE_PREFIX}-${name}`)
  }
}
export default new COOKIES()
