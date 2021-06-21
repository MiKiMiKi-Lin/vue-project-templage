import axios from 'axios'
// import qs from 'qs'
import { getToken } from 'utils/auth'
import { Message } from 'element-ui'

// get请求不需要请求体，不用设置Content-Type
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

// axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': true
  }
})

// 拦截器
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    if (!error.response) {
      if (error.message.includes('timeout')) {
        Message.error('请求超时')
      } else {
        Message.error('请求失败，请检查网络连接')
      }
      return
    }

    const status = error.response.status
    switch (status) {
      case 401:
        Message.error('登录信息失效，请重新登录')
        break
      default:
        Message.error(error.response.message || '出错啦')
    }

    return Promise.reject(error)
  }
)

export default instance
