import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/learn/api/v1/mall/home-flash-promotion-sessions',
    method: 'get',
    params: params
  })
}

export function fetchSelectList(params) {
  return request({
    url: '/learn/api/v1/mall/home-flash-promotion-sessions-select',
    method: 'get',
    params: params
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/flashSession/update/status/' + id,
    method: 'post',
    params: params
  })
}

export function deleteSession(id) {
  return request({
    url: '/flashSession/delete/' + id,
    method: 'post'
  })
}

export function createSession(data) {
  return request({
    url: '/flashSession/create',
    method: 'post',
    data: data
  })
}

export function updateSession(id, data) {
  return request({
    url: '/flashSession/update/' + id,
    method: 'post',
    data: data
  })
}
