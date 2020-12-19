<template>
  <div>
    <el-tooltip
      effect="dark"
      content="未读信息"
      placement="bottom"
    >
      <el-button
        class=" btn-text can-hover notifiy"
        type="text"
        @click="toggle"
      >
        <el-badge
          v-if="badgeNums"
          :value="badgeNums"
          class="badge"
        >
        </el-badge>
        <div
          class="bell"
          ref='bell'
        ></div>
      </el-button>
    </el-tooltip>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      :modal-append-to-body="false"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import Anim from './data.json'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'w-notification',
  computed: {
    bell() {
      return this.$refs.bell
    }
  },
  data() {
    return {
      Notifi: null,
      drawer: false
    }
  },
  computed: {
    ...mapState('w-admin', {
      badgeNums: state => state.badge.badge
    }),
    bell() {
      return this.$refs.bell
    }
  },
  mounted() {
    this.createNotification()
    this.Notifi.stop()
  },
  watch: {
    badgeNums(newValue, oldValue) {
      if (newValue) {
        this.Notifi.play()
      } else {
        this.Notifi.stop()
      }
    }
  },
  methods: {
    ...mapActions('w-admin/badge', ['clearBadge']),
    createNotification() {
      this.Notifi = lottie.loadAnimation({
        container: this.bell,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Anim
      })
    },
    toggle() {
      this.clearBadge()
      this.stop()
      this.drawer = true
    },
    stop() {
      this.Notifi.stop()
    },
    play() {
      this.Notifi.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.notifiy {
  width: 42px;
  height: 48px;
  position: relative;
  right: 0px;
  display: flex;
  align-items: center;
  justify-self: center;
  .badge {
    top: -0px;
    right: -7px;
    position: absolute;
    z-index: 5;
  }
  .bell {
    width: 24px;
    height: 40px;
    position: relative;
    right: 4px;
    ::v-deep {
      svg {
        stroke-width: 42px !important;
        path {
          stroke-width: 45px !important;
        }
      }
    }
  }
}
</style>