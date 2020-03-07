import request from '@/utils/request'

export function listAllCate() {
  return request({
    url: '/api/v1/mall/resources-cate/listAll',
    method: 'get'
  })
}

export function createResourceCategory(data) {
  return request({
    url: '/resourceCategory/create',
    method: 'post',
    data: data
  })
}

export function updateResourceCategory(id, data) {
  return request({
    url: '/resourceCategory/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteResourceCategory(id) {
  return request({
    url: '/resourceCategory/delete/' + id,
    method: 'post'
  })
}
