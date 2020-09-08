import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  //baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'api',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    const clientId = process.env.VUE_APP_CLIENT_ID;
    const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
    config.headers['Authorization'] = `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`;
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('您已经注销，您可以取消停留在这个页面上，或再次登录', '确认登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 随后计
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (error.message) {
      const errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
      switch (error.response.status) {
        case 404:
          Message({
            message: '很抱歉，资源未找到' || 'Error',
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 403:
          Message({
            message: '很抱歉，您暂无该操作权限' || 'Error',
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 401:
          Message({
            message: '很抱歉，认证已失效，请重新登录' || 'Error',
            type: 'error',
            duration: 5 * 1000
          })
          break
        default:
          if (error.Message) {
            Message({
              message: error.Message,
              type: 'error',
              duration: 5 * 1000
            })
          }
          break
      }
    }
    return Promise.reject(error)
  }
)

export default service
