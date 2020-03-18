import request from '@/utils/request'

export function fetchListAll() {
  return request({
    url: '/learn/api/v1/mall/subjects/listAll',
    method: 'get',
  })
}

export function fetchList(params) {
  return request({
    url: '/learn/api/v1/mall/subjects',
    method: 'get',
    params: params
  })
}
