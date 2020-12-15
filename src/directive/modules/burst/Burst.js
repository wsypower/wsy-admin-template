import mojs from '@mojs/core'
import animation from './animation'
import ObserveEmitter from '../../model/observeModel.js'
const defaultOptions = {
  left: '50%',
  top: '50%',
  icon: false,
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
export default class Burst extends ObserveEmitter {
  constructor(el, binding) {
    super(el, binding)
    // 选择的动画库
    this.arg = binding.arg || 'burst'
    //  添加默认值
    this.value = Object.assign(
      defaultOptions,
      animation[this.arg],
      binding.value
    )
    this.MoTag = 'Burst' // Mojs动画的大类型,扩展留下位置
  }

  /**
   * @description
   * 初始化
   * @author wsy
   * @date 2020-12-12  21:03:31
   */
  init() {
    super.init(this.createBurst)
  }

  /**
   * @description
   * 执行逻辑
   * @author wsy
   * @date 2020-12-12  21:02:35
   */
  createBurst() {
    if (this.value.icon) {
      this.observeIcon()
      return
    }
    this.startMoAnimation()
  }

  startMoAnimation() {
    this.initMojs()
    this.tuneMojs()
  }

  initMojs(el) {
    if (el) {
      el.style.position = 'relative'
    } else {
      this.el.style.position = 'relative'
    }
    this.Mo = new mojs[this.MoTag](
      Object.assign({ parent: el || this.el }, this.value)
    )
  }

  /**
   * @description
   * 监测有无需要添加的指令
   * 启动mo动画
   * @author wsy
   * @date 2020-12-12  17:33:58
   */
  tuneMojs() {
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
   * 监测icon 父元素 查找icon,以他动画父元素启动mo
   * @author wsy
   * @date 2020-12-12  17:34:29
   */
  observeIcon() {
    const icon = (this.el.querySelectorAll('i') ||
      this.el.querySelectorAll('svg'))[0]
    if (icon) {
      if (~this.el.className.search('active')) {
        this.initMojs(icon)
        this.tuneMojs()
      }
      return
    }
    this.startMoAnimation()
  }
}
