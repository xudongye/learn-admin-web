import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/api/v1/mall/preference-areas/listAll',
    method: 'get',
  })
}
