<template>
  <div class="notifiy-warp">
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
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      :modal='false'
      style="outline:none;"
    >
      <div class="drawer-content">
        <el-card
          shadow="always"
          class="el-card-warp"
        >
          <div class="card">
            <d2-icon name="github" />
          </div>
        </el-card>
      </div>
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
      // this.drawer = true
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
.notifiy-warp {
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
  .drawer-content {
    width: 100%;
    height: 100%;
    padding: 15px;
    ::v-deep {
      .el-card__body {
        padding: 0px;
      }
    }

    .card {
      width: 100%;
      min-height: 60px;
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>