import request from '@/utils/request'

export function fetchList(parentId, params) {
  return request({
    url: '/api/v1/product-category/' + parentId,
    method: 'get',
    params: params
  })
}

export function deleteProductCate(id) {
  return request({
    url: '/productCategory/delete/' + id,
    method: 'post'
  })
}

export function createProductCate(data) {
  return request({
    url: '/api/v1/product-category',
    method: 'post',
    data: data
  })
}

export function updateProductCate(id, data) {
  return request({
    url: '/api/v1/product-category/' + id,
    method: 'post',
    data: data
  })
}

export function getProductCate(id) {
  return request({
    url: '/api/v1/product-category/info/' + id,
    method: 'get',
  })
}

export function updateShowStatus(data) {
  return request({
    url: '/productCategory/update/showStatus',
    method: 'post',
    data: data
  })
}

export function updateNavStatus(data) {
  return request({
    url: '/productCategory/update/navStatus',
    method: 'post',
    data: data
  })
}

export function fetchListWithChildren() {
  return request({
    url: '/api/v1/product-category/withCateChildren',
    method: 'get'
  })
}
