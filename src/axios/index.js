// 配置 http
import axios from 'axios'
import qs from 'qs'
import {message} from 'ant-design-vue'

axios.defaults.timeout = 30000
axios.defaults.baseURL = 'http://localhost:8087/api'
axios.defaults.withCredentials = true

var loadinginstace

// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log('config.url', config.url)
    if (config.method !== 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    closeLoadinginstace()
    message.error(
      '请求超时'
    )
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    closeLoadinginstace()
    if (response.status !== 200) {
      message.error(
        response.data.statusText ? response.data.statusText : ''
      )
      return Promise.reject(response.data)
    } else {
      return response
    }
  },
  error => {
    closeLoadinginstace()
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          console.log('axios index - 401')
      }
    } else {
      console.log('error.res1====' + error)
    }
    console.log('error = ' + JSON.stringify(error)) // console : Error: Request failed with status code
    let msg = '网络未通或服务未启动'
    if (error.response && error.response.data && error.response.data.meta && error.response.data.meta.msg) {
      msg = error.response.data.meta.msg
    }
    message.destroy()
    message.error(
      msg, 0
    )
    return Promise.reject(error)
  }
)

function closeLoadinginstace () {
  if (loadinginstace) {
    loadinginstace.close()
  }
}

export default axios
