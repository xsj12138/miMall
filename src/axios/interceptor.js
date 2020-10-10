import Axios from 'axios'
import QS from 'qs'

const interceptor = Axios.create({
  baseURL: '/api',
  timeout: 8000
})

// 响应拦截
interceptor.interceptors.response.use(res => {
  const data = res.data
  if (!('status' in data)) {
    return data
  } else {
    switch (data.status) {
      case 0:
        return Promise.resolve(data.data)
      case 10:
        window.location.href = '/#/login'
        break
      default:
        return Promise.reject(data.message)
    }
  }
})

// 请求拦截
interceptor.interceptors.request.use(conf => {
  if (conf.method === 'get') {
    if (conf.params) {
      conf.params.tiemStamp = Date.now()
    } else {
      conf.params = { tiemStamp: Date.now() }
    }
  }
  if (conf.method === 'post') {
    conf.data = QS.stringify(conf.data)
  }
  return conf
})

export default interceptor
