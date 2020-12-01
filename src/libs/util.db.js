import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import util from '@/libs/util'
import { cloneDeep } from 'lodash'

/**
 * TODO LocalStorage 超出大小提示
 */
export default new (class db {
  constructor() {
    /**
     * 将数据存入LocalStorage之中
     * 并已存在于env文件中的 [VUE_APP_PROJECT_NAME]-[VUE_APP_VERSION] 为命名空间
     */
    this.adapter = new LocalStorage(
      `${process.env.VUE_APP_PROJECT_NAME}-${process.env.VUE_APP_VERSION}`
    )

    this.db = low(this.adapter)
    this.init()
  }

  /**
   * @description
   * 设置一个默认的系统结构
   * @author wsy
   * @date 2020-12-01  16:48:19
   */
  init() {
    this.db
      .defaults({
        sys: {},
        database: {},
        version: `${process.env.VUE_APP_PROJECT_NAME}/${process.env.VUE_APP_VERSION}`
      })
      .write()
  }

  /**
   * @description 检查路径是否存在 不存在的话初始化
   * @param {String} payload dbName {String} 数据库名称
   * @param {String} payload path {String} 路径
   * @param {Boolean} payload user {Boolean} 区分用户
   * @param {Function} payload validator {Function} 数据校验钩子 返回 true 表示验证通过
   * @param {*} payload defaultValue {*} 初始化默认值
   * @returns {String} 可以直接使用的路径
   */
  pathInit({
    dbName = 'database',
    path = '',
    user = true,
    validator = () => true,
    defaultValue = ''
  }) {
    const uuid = util.cookies.get('uuid') || 'ghost-uuid'
    // 根据参数user是否区分用户调整路径结构
    // 用户私有 - 数据区分依据 [uuid] 也可以是项目中定的其他唯一不重复数据 例: userId
    // 路由私有 - 数据区分依据 [fullPath] 也可以是 route.name
    const currentPath = `${dbName}.${user ? `user.${uuid}` : 'public'}${
      path ? `.${path}` : ''
    }`
    // 如果您只是从db读取，请使用.value（）而不是.write（）
    const value = this.db.get(currentPath).value()
    if (!(value !== undefined && validator(value))) {
      // 使用Lodash简写语法设置用户
      this.db.set(currentPath, defaultValue).write()
    }
    return currentPath
  }

  /**
   * @description 将数据存储到指定位置 | 路径不存在会自动初始化
   * @description 效果类似于取值 dbName.path = value
   * @param {Object} payload dbName {String} 数据库名称
   * @param {Object} payload path {String} 存储路径
   * @param {Object} payload value {*} 需要存储的值
   * @param {Object} payload user {Boolean} 是否区分用户
   */
  dbSet({ dbName = 'database', path = '', value = '', user = false }) {
    this.db
      .set(
        this.pathInit({
          dbName,
          path,
          user
        }),
        value
      )
      .write()
  }

  /**
   * @description 获取数据
   * @description 效果类似于取值 dbName.path || defaultValue
   * @description 使用cloneDeep是因为数据是通过引用返回的,这意味着对返回对象的修改可能会更改数据库
   * @param {Object} payload dbName {String} 数据库名称
   * @param {Object} payload path {String} 存储路径
   * @param {Object} payload defaultValue {*} 取值失败的默认值
   * @param {Object} payload user {Boolean} 是否区分用户
   */
  dbGet({ dbName = 'database', path = '', defaultValue = '', user = false }) {
    return cloneDeep(
      this.db
        .get(
          this.pathInit({
            dbName,
            path,
            user,
            defaultValue
          })
        )
        .value()
    )
  }

  /**
   * @description 获取存储数据库对象
   * @param {Object} payload user {Boolean} 是否区分用户
   */
  getDatabase({
    dbName = 'database',
    path = '',
    user = false,
    validator = () => true,
    defaultValue = ''
  } = {}) {
    return this.db.get(
      this.pathInit({
        dbName,
        path,
        user,
        validator,
        defaultValue
      })
    )
  }
})()
