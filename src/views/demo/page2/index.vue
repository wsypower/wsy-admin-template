<template>
  <d2-container>
    <template slot="header">Page 2 header</template>
    Hello World
    <div>请求打印 id:---{{id}}</div>
    <div>请求打印 address:---{{address}}</div>
  </d2-container>
</template>

<script>
export default {
  name: 'page2',
  mounted() {
    console.log('请求dom展示')
    this.requestDemo()
  },
  data() {
    return {
      id: '',
      address: ''
    }
  },
  methods: {
    requestDemo() {
      return this.$api.DEMO_FETCH().then(res => {
        console.log(res)
        const { id, image, address } = res
        this.id = id
        this.address = address
      })
    }
  }
}
</script>
