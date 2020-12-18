import { mapState, mapGetters } from 'vuex'
import { createMenu } from '../libs/util.menu'
import BScroll from 'better-scroll'
import util from '@/libs/util.js'
export default {
  name: 'd2-layout-header-aside-menu-side',
  render(h) {
    return (
      <div class="d2-layout-header-aside-menu-side">
        <el-menu
          collapse={this.asideCollapse}
          collapseTransition={this.asideTransition}
          uniqueOpened={true}
          defaultActive={this.active}
          ref="menu"
          onSelect={this.handleMenuSelect}
        >
          {this.aside.map(menu => createMenu.call(this, h, menu))}
        </el-menu>
        {this.aside.length === 0 && !this.asideCollapse ? (
          <div
            class="d2-layout-header-aside-menu-empty"
            flex="dir:top main:center cross:center"
          >
            <d2-icon name="inbox"></d2-icon>
            <span>没有侧栏菜单</span>
          </div>
        ) : null}
      </div>
    )
  },
  data() {
    return {
      asideHeight: 300,
      BS: null,
      active: ''
    }
  },
  computed: {
    ...mapState('w-admin/menu', ['aside', 'asideCollapse', 'asideTransition']),
    ...mapGetters('w-admin/menu', ['deepMenuAside'])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse(val) {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    },
    '$route.matched': {
      handler(val) {
        const currentPath = val[val.length - 1].path
        let routerToPAth = this.$route.fullPath
        if (this.deepMenuAside.includes(currentPath)) {
          this.active = routerToPAth
          return
        }
        // 尝试匹配出dirname路径
        const rootRouter = routerToPAth.match(/^\/(\w-)*[^\/]*/gi)[0]
        if (
          this.deepMenuAside.some(item => new RegExp(rootRouter).test(item))
        ) {
          // 如果符合就赋值
          routerToPAth = rootRouter
        }
        this.active = routerToPAth
      },
      immediate: true
    }
  },
  mounted() {
    this.scrollInit()
  },
  beforeDestroy() {
    this.scrollDestroy()
  },
  methods: {
    handleMenuSelect(index, indexPath) {
      if (/^w-menu-empty-\d+$/.test(index) || index === undefined) {
        this.$message.warning('功能暂未上线')
      } else if (/^https:\/\/|http:\/\//.test(index)) {
        util.open(index)
      } else {
        this.$router.push({
          path: index
        })
      }
    },
    scrollInit() {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        click: true
        // 如果你愿意可以打开显示滚动条
        // scrollbar: {
        //   fade: true,
        //   interactive: false
        // }
      })
    },
    scrollDestroy() {
      // https://github.com/d2-projects/d2-admin/issues/75
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    }
  }
}
