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
    this.requestDemoAny()
    this.requestDemoGet()
  },
  data() {
    return {
      id: '',
      address: ''
    }
  },
  methods: {
    requestDemoAny() {
      return this.$api.DEMO_ANY({ id: '123' }).then(res => {
        console.log(res)
        const { id, image, address } = res
        this.id = id
        this.address = address
      })
    },
    requestDemoGet() {
      return this.$api.DEMO_GET({ user: '123123' }).then(res => {
        console.log(res)
      })
    },
    requestDemoPost() {
      return this.$api.DEMO_POST().then(res => {
        console.log(res)
        const { id, image, address } = res
        this.id = id
        this.address = address
      })
    }
  }
}
</script>
