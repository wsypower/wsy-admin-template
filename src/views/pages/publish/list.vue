<template>
  <div class="list">
    list
    <el-button
      type="primary"
      @click="routerToAdd"
    >跳转到add</el-button>
  </div>
</template>

<script>
export default {
  name: 'list',
  methods: {
    routerToAdd() {
      this.$router.push('/publish/add')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
