<template>
  <div class="user">
    <div class="avatar">
      <el-avatar
        size='small'
        icon="el-icon-user-solid"
      ></el-avatar>
    </div>
    <el-dropdown
      size="small"
      class="d2-mr"
    >
      <span class="btn-text">{{info.name ? `你好 ${info.name}` : '未登录'}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logOff">
          <d2-icon
            name="power-off"
            class="d2-mr-5"
          />
          注销
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('w-admin/user', ['info'])
  },
  methods: {
    ...mapActions('w-admin/account', ['logout']),
    /**
     * @description 登出
     */
    logOff() {
      this.logout({
        confirm: true
      })
    }
  }
}
</script>
