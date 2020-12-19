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
   * TODO 仅仅模拟一下数据,真实可用socket.io
   * 演示SOCKET
   * @description 方法名称
   * @param {Object} data 请求携带的信息
   */
  DEMO_SOCKET(data = {}) {
    // 模拟数据
    mock.onAny('demo/socket').reply(config => {
      // 模拟正确的返回 并使用 faker 生成假数据
      return tools.responseSuccess({
        badgeNum: 1,
        data: {}
      })
      // 模拟失败的返回
      // return tools.responseError({}, '错误信息')
    })
    // 接口请求
    // 如果这个接口不需要模拟了，请使用 request 代替 requestForMock
    return requestForMock({
      url: '/demo/socket',
      method: 'post',
      data
    })
  }
})
