// https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js

import axios from 'axios'
import { message, Button, Space } from 'antd'

// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   // config.headers['X-Token'] = getToken()
    // }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    console.log(
      '%c response.data: ',
      'background: red; color: white; font-weight: 900',
      response.data
    )

    const res = response.data

    console.log(res)

    // if the custom code is not 20000, it is judged as an error.
    if (!res.success) {
      /**
       * example
       {
          success: false,
          msg: "請輸入正確的帳號或密碼",
          data: null,
        }
       */
      message.error((res && res.message) || 'Error')

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login

        message.error('This is an error message')
        // MessageBox.confirm(
        //   'You have been logged out, you can cancel to stay on this page, or log in again',
        //   'Confirm logout',
        //   {
        //     confirmButtonText: 'Re-Login',
        //     cancelButtonText: 'Cancel',
        //     type: 'warning',
        //   }
        // ).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      }
      return Promise.reject(res.message || 'Error')
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug

    console.log(
      '%c err: ',
      'background: red; color: white; font-weight: bolder;',
      error
    )

    message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
