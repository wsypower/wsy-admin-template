<template>
  <d2-container>
    <template slot="header">Page 1 header</template>
    Hello World
  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  mounted() {
    console.log('测试缓存页面')
    console.log(this.key++)
  },
  data() {
    return {
      key: 1
    }
  }
}
</script>
