<template>
  <d2-container>
    <template slot="header">Page 2 header</template>
    Hello World
  </d2-container>
</template>

<script>
export default {
  name: 'page2',
  mounted() {
    console.log('未缓存页面page2')
  }
}
</script>
