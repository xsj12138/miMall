let baseURL
console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'developement':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://prod-mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
}
export default baseURL
