import Mock from 'mockjs'

Mock.mock(/xx/, 'get', option => {
  console.log(option)
  return Mock.mock({
    'status|1': [0, 1, 10],
    data: {
      x: 1
    },
    message: '错误'
  })
})
