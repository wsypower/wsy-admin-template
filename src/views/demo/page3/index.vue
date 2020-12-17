<template>
  <d2-container>
    <template slot="header">测试组件大小设置</template>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <div class="font">测试字体大小</div>

    </el-row>
  </d2-container>
</template>

<script>
export default {
  name: 'page3'
}
</script>
<style lang="scss" scoped>
.font {
  font-size: 50px;
  color: red;
}
</style>