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
    console.log('this is page1')
  }
}
</script>
