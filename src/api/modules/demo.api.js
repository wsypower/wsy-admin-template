export default ({
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  faker,
  tools
}) => ({
  /**
   * 演示any
   * @description 方法名称
   * @param {Object} data 请求携带的信息
   */
  DEMO_ANY(data = {}) {
    // 模拟数据
    // 无论GET POST 只要路径是demo
    mock.onAny('demo/any').reply(config => {
      console.log(config)
      // 您可以这样在拦截请求时获取携带的数据
      // TODO 参数是JSON格式,需要转换
      const data = tools.parse(config.data)
      console.log(data)
      // 模拟正确的返回 并使用 faker 生成假数据
      return tools.responseSuccess({
        id: faker.random.uuid(),
        address: faker.address.state()
      })
      // 模拟失败的返回
      // return tools.responseError({}, '错误信息')
    })
    // 接口请求
    // 如果这个接口不需要模拟了，请使用 request 代替 requestForMock
    return requestForMock({
      url: '/demo/any',
      method: 'post',
      data
    })
  },
  /**
   * 演示POST
   * @description 方法名称
   * @param {Object} data 请求携带的信息
   */
  DEMO_POST(data = {}) {
    // 模拟数据
    // 无论GET POST 只要路径是demo
    mock.onPost('demo/post').reply(config => {
      // 您可以这样在拦截请求时获取携带的数据
      // const data = tools.parse(config.data)
      // 模拟正确的返回 并使用 faker 生成假数据
      return tools.responseSuccess({
        rep: '这是POST请求'
      })
      // 模拟失败的返回
      // return tools.responseError({}, '错误信息')
    })
    // 接口请求
    // 如果这个接口不需要模拟了，请使用 request 代替 requestForMock
    return requestForMock({
      url: '/demo/post',
      method: 'post',
      data
    })
  },
  /**
   * 演示GET
   * @description 方法名称
   * @param {Object} data 请求携带的信息
   */
  DEMO_GET(params = {}) {
    // 模拟数据
    // 无论GET POST 只要路径是demo
    mock.onGet('demo/get').reply(config => {
      // 您可以这样在拦截请求时获取携带的数据
      // const params = config.params
      // 模拟正确的返回 并使用 faker 生成假数据
      return tools.responseSuccess({
        rep: '这是get请求'
      })
      // 模拟失败的返回
      // return tools.responseError({}, '错误信息')
    })
    // 接口请求
    // 如果这个接口不需要模拟了，请使用 request 代替 requestForMock
    return requestForMock({
      url: '/demo/get',
      method: 'get',
      params
    })
  }
})
