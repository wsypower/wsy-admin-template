import mojs from '@mojs/core'
import animation from './animation'

const defaultOptions = {
  left: '50%',
  top: '50%',
  color: '#409EFF'
}
/**
 * @description
 * 炸裂动画效果
 * @author wsy
 * @date 2020-12-12  15:11:16
 * @param {ELement} el
 * @param {String} arg 选取不同的动画效果
 * @param {Object} value 出入参数
 * @param {Object} modifiers 分icon 和  任意事件（事件默认是click）
 * @class Burst
 */

export default class Burst {
  constructor(el, arg, value, modifiers) {
    // 目标元素
    this.el = el
    // 选择的动画库
    this.arg = arg || 'burst'
    /**
     * 区别于点击事件触发burst动画
     * icon 调用dom数据监测去启动动画
     * event 通过事件去触发
     */
    this.modifiers = this.checkModifiers(modifiers)
    this.value = Object.assign(defaultOptions, animation[this.arg], value)
    // Mojs动画的大类型,扩展留下位置
    this.MoTag = 'Burst'
    this.Mo = null
  }

  init() {
    this.observe()
  }

  Mojs(el) {
    if (el) {
      el.style.position = 'relative'
    } else {
      this.el.style.position = 'relative'
    }
    this.Mo = new mojs[this.MoTag](
      Object.assign({ parent: el || this.el }, this.value)
    )
  }

  // 根据修饰符选择监测事件
  observe() {
    return this.modifiers === 'icon'
      ? this.observeIcon()
      : this.observeEvent(this.modifiers)
  }

  observeEvent(event) {
    this.Mojs()
    this.el.addEventListener(event, e => {
      this.startMojs()
    })
  }

  /**
   * @description
   * 监测icon 父元素 查找icon,以他动画父元素启动mo
   * @author wsy
   * @date 2020-12-12  17:34:29
   */
  observeIcon() {
    const icon = (this.el.querySelectorAll('i') ||
      this.el.querySelectorAll('svg'))[0]
    this.Mojs(icon)
    const observe = new window.MutationObserver(() => {
      if (~this.el.className.search('active')) {
        this.startMojs()
      }
    })
    observe.observe(this.el, {
      attributeFilter: ['class'],
      subtree: true
    })
  }

  /**
   * @description
   * 监测有无需要添加的指令
   * 启动mo动画
   * @author wsy
   * @date 2020-12-12  17:33:58
   */
  startMojs() {
    const color =
      this.arg === 'burst'
        ? { children: { stroke: this.value.color } }
        : {
          children: { fill: this.value.color }
        }
    return this.Mo.tune(color).replay()
  }

  /**
   * @description
   * 取值icon 如果取不到就是事件驱动
   * @author wsy
   * @date 2020-12-12  15:16:06
   */
  checkModifiers(modifiers) {
    const def = ['click']
    // 默认值的下标是0,传入值只要有值就会替换下标0
    const event = Object.assign(def, Object.keys(modifiers))
    if (event.length > 1) throw new Error('Burst指令仅支持一个标识符')
    return event[0]
  }
}
