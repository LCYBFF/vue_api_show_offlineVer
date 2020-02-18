import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: "https://www.fastmock.site/mock/bb65e850f777ef42b844bbce06a14b81/apishow", 
  timeout: 5000,
  headers: {'Accept': 'application/json'}
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    Message({
        message: '请求失败',
        type: 'warning'
      })
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res = response.data

    if (res.code !== 200) {
      Message({
        message: res.result || '接口信息资源失效',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.result)
    } else {
      return res
    }
  }, function (error) {
    // 对响应错误做点什么
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  });

export default service
