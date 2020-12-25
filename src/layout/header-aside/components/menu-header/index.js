import { throttle } from 'lodash'
import { mapState, mapActions, mapGetters } from 'vuex'
import { createMenu } from '../libs/util.menu'
import util from '@/libs/util.js'
import anime from 'animejs/lib/anime.es.js'
export default {
  name: 'd2-layout-header-aside-menu-header',
  render(h) {
    return (
      <div
        flex="cross:center"
        class={{ 'w-theme-header-menu': true, 'is-scrollable': this.isScroll }}
        ref="page"
      >
        <div
          ref="content"
          class="w-theme-header-menu__content"
          flex-box="1"
          flex
        >
          <div
            class="w-theme-header-menu__scroll"
            flex-box="0"
            style={{ transform: `translateX(${this.currentTranslateX}px)` }}
            ref="scroll"
          >
            <el-menu
              mode="horizontal"
              defaultActive={this.active}
              onSelect={this.handleMenuSelect}
              ref="headerMenu"
              style={{ height: '100%' }}
            >
              {this.header.map(menu => createMenu.call(this, h, menu))}
            </el-menu>
            <div class="header-menu-line" ref="line"></div>
          </div>
        </div>
        {this.isScroll
          ? [
            <div
              class="w-theme-header-menu__prev"
              flex="main:center cross:center"
              flex-box="0"
              onClick={() => this.scroll('left')}
            >
              <i class="el-icon-arrow-left"></i>
            </div>,
            <div
              class="w-theme-header-menu__next"
              flex="main:center cross:center"
              flex-box="0"
              onClick={() => this.scroll('right')}
            >
              <i class="el-icon-arrow-right"></i>
            </div>
          ]
          : []}
      </div>
    )
  },
  computed: {
    ...mapState('w-admin/menu', ['header']),
    ...mapGetters('w-admin/menu', ['deepMenuAside', 'deepMenuHeader'])
  },
  data() {
    return {
      active: '',
      isScroll: false,
      scrollWidth: 0,
      contentWidth: 0,
      currentTranslateX: 0,
      throttledCheckScroll: null,
      menuItemArr: null,
      sliderLine: {
        width: 0,
        translateX: 0
      }
    }
  },
  watch: {
    '$route.matched': {
      handler(val) {
        let routerToPAth = val[val.length - 1].path
        // FIX:首次加载时没有对应到header-menu指定的路径
        if (this.active == '' && !this.deepMenuHeader.includes(routerToPAth)) {
          routerToPAth = this.deepMenuAside[0]
        }
        if (this.active !== '') {
          if (
            // FIX:只要侧边栏有这个path的match路径 头部menu就原位置保持高量
            this.deepMenuAside.includes(val.slice(-2)[0].path) ||
            // FIX:只要侧边栏有这个path 头部menu就原位置保持高量
            this.deepMenuAside.includes(routerToPAth)
          ) {
            return
          }
        }
        this.active = routerToPAth
        this.$refs.headerMenu &&
          this.$nextTick(() => {
            this.setSliderLine()
            this.sliderAnima()
          })
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('w-admin/container', ['changeAnimation']),
    /**
     * @description
     * menu选择回调
     */
    async handleMenuSelect(index, indexPath) {
      try {
        if (/^w-menu-empty-\d+$/.test(index) || index === undefined) {
          this.$message.warning('功能暂未上线')
          // FIX:修复element-ui menu组件点击之后class自动添加is-active
          this.$children[0].activeIndex = this.active
        } else if (/^https:\/\/|http:\/\//.test(index)) {
          // FIX:修复element-ui menu组件点击之后class自动添加is-active
          this.$children[0].activeIndex = this.active
          util.open(index)
        } else {
          await this.setContainerCompAnimation(indexPath)
          this.$router.push({
            path: index
          })
          this.$nextTick(() => {
            this.setSliderLine()
            this.sliderAnima()
          })
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    /**
     * 获取页面内组件切换的动画
     */
    async setContainerCompAnimation(routerMatch) {
      if (this.menuItemArr == null) return
      try {
        const oldActivePathIndex = this.menuItemArr.find(v => v.active).index
        const newActivePathIndex = this.menuItemArr.find(
          v => v.path === routerMatch[0]
        ).index
        await this.changeAnimation({
          oldIndex: oldActivePathIndex,
          newIndex: newActivePathIndex
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    /**
     * @description
     * 获取header menuItem的宽度
     */
    getMenuItemWidth() {
      const headerMenu = this.$refs.headerMenu
      const menuItemChildren = Array.isArray(headerMenu.$children)
        ? headerMenu.$children.map(children => {
          const { active, $el, index: path } = children
          return { active, $el, path }
        })
        : null

      // 获取没个menu的宽度
      return menuItemChildren == null
        ? null
        : menuItemChildren.map((item, index) => ({
          active: item.active,
          index,
          width: item.$el.clientWidth,
          path: item.path
        }))
    },
    /**
     * @description
     * 初始化slider-line的宽度和右移值
     */
    setSliderLine() {
      // 赋值
      this.menuItemArr = this.getMenuItemWidth()
      // getMenuItemWidth 为 null 只有不设置header menu的时候 直接返回
      if (this.menuItemArr == null) {
        this.sliderLine = {
          width: 0,
          translateX: 0
        }
        return
      }
      // 进入初始化阶段
      // 找到当前激活的menu-item,line的宽度就是itme的宽度,left值是当前激活元素之前的宽度之和
      const sliderLine = this.menuItemArr.reduce(
        (activeItem, item, _, ItemArr) => {
          if (item.active) {
            activeItem.width = item.width - 30
            // 取宽度和
            activeItem.translateX = ItemArr.slice(0, item.index).reduce(
              (a, v) => (a += v.width),
              15
            )
          }
          return activeItem
        },
        { width: 0, translateX: 0 }
      )
      this.sliderLine = sliderLine
    },
    /**
     * @description
     * slider line移动动画
     */
    sliderAnima() {
      const targets = this.$refs.line
      const { translateX, width } = this.sliderLine
      // 再次往事件栈尾置入,避免卡顿
      this.$nextTick(() => {
        anime({
          targets,
          translateX,
          width
        })
      })
    },
    scroll(direction) {
      if (direction === 'left') {
        // 向右滚动
        this.currentTranslateX = 0
      } else {
        // 向左滚动
        if (
          this.contentWidth * 2 - this.currentTranslateX <=
          this.scrollWidth
        ) {
          this.currentTranslateX -= this.contentWidth
        } else {
          this.currentTranslateX = this.contentWidth - this.scrollWidth
        }
      }
    },
    checkScroll() {
      let contentWidth = this.$refs.content.clientWidth
      let scrollWidth = this.$refs.scroll.clientWidth
      if (this.isScroll) {
        // 页面依旧允许滚动的情况，需要更新width
        if (this.contentWidth - this.scrollWidth === this.currentTranslateX) {
          // currentTranslateX 也需要相应变化【在右端到头的情况时】
          this.currentTranslateX = contentWidth - scrollWidth
          // 快速的滑动依旧存在判断和计算时对应的contentWidth变成正数，所以需要限制一下
          if (this.currentTranslateX > 0) {
            this.currentTranslateX = 0
          }
        }
        // 更新元素数据
        this.contentWidth = contentWidth
        this.scrollWidth = scrollWidth
        // 判断何时滚动消失: 当scroll > content
        if (contentWidth > scrollWidth) {
          this.isScroll = false
        }
      }
      // 判断何时滚动出现: 当scroll < content
      if (!this.isScroll && contentWidth < scrollWidth) {
        this.isScroll = true
        // 注意，当isScroll变为true，对应的元素盒子大小会发生变化
        this.$nextTick(() => {
          contentWidth = this.$refs.content.clientWidth
          scrollWidth = this.$refs.scroll.clientWidth
          this.contentWidth = contentWidth
          this.scrollWidth = scrollWidth
          this.currentTranslateX = 0
        })
      }
    }
  },
  mounted() {
    // 初始化判断
    // 默认判断父元素和子元素的大小，以确定初始情况是否显示滚动
    this.checkScroll()
    // 全局窗口变化监听，判断父元素和子元素的大小，从而控制isScroll的开关
    this.throttledCheckScroll = throttle(this.checkScroll, 300)
    window.addEventListener('resize', this.throttledCheckScroll)
    // 初始化line的样式
    this.setSliderLine()
    this.$nextTick(() => {
      this.sliderAnima()
    })
  },
  beforeDestroy() {
    // 取消监听
    window.removeEventListener('resize', this.throttledCheckScroll)
  }
}
