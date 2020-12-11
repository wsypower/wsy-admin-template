import mojs from '@mojs/core'
import animation from './animation'

const defaultOptions = {
  left: '50%',
  top: '50%',
  color: '#409EFF'
}
export default class Burst {
  constructor(el, arg, value, observeOption) {
    this.el = el
    this.arg = arg
    this.observeOption = observeOption
    this.value = Object.assign(defaultOptions, animation[this.arg], value)
    this.MoTag = 'Burst'
    this.Mo = null
  }

  init() {
    this.observe()
    this.Mojs()
  }

  Mojs() {
    this.el.style.position = 'relative'
    this.Mo = new mojs[this.MoTag](
      Object.assign({ parent: this.el }, this.value)
    )
  }

  observe() {
    console.log(123)
    return this.observeOption.option === 'event'
      ? this.observeEvent(this.observeEvent.event)
      : this.observeClass(this.observeEvent.event)
  }

  observeEvent(event) {
    console.log(123123123)
    this.el.addEventListener('click', e => {
      this.startMojs()
    })
  }

  observeClass(event) {
    const observe = new window.MutationObserver(() => {
      if (~this.el.className.search('active')) {
        this.startMojs()
      }
    })
    observe.observe(this.el, {
      attributeFilter: [event],
      subtree: true
    })
  }

  startMojs() {
    const color =
      this.arg === 'burst'
        ? { children: { stroke: this.value.color } }
        : {
          children: {
            fill: this.value.value.color
          }
        }
    return this.Mo.tune(color).replay()
  }
}
