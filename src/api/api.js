import request from '@/utils/request'

export function getApiInfo(params) {
  return request({
    url: '/api_list/'+params,
    method: 'get',
  })
}

export function getErrorCode(params) {
  return request({
    url: '/code_list',
    method: 'get',
    params
  })
}