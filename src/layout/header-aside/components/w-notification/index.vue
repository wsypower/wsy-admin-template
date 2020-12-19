<template>
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

</template>

<script>
import lottie from 'lottie-web'
import Anim from './data.json'
import { mapState } from 'vuex'
export default {
  name: 'w-notification',
  computed: {
    bell() {
      return this.$refs.bell
    }
  },
  data() {
    return {
      Notifi: null
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
    createNotification() {
      this.Notifi = lottie.loadAnimation({
        container: this.bell,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Anim
      })
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
  right: 6px;
  display: flex;
  align-items: center;
  justify-self: center;
  .badge {
    top: -0px;
    right: -12px;
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