import request from '@/utils/request'

export function fetchList(cid, params) {
  return request({
    url: '/api/v1/mall/product-attr/' + cid,
    method: 'get',
    params: params
  })
}

export function deleteProductAttr(data) {
  return request({
    url: '/productAttribute/delete',
    method: 'post',
    data: data
  })
}

export function createProductAttr(data) {
  return request({
    url: '/api/v1/product-attr',
    method: 'post',
    data: data
  })
}

export function updateProductAttr(id, data) {
  return request({
    url: '/api/v1/product-attr/' + id,
    method: 'post',
    data: data
  })
}

export function getProductAttr(id) {
  return request({
    url: '/productAttribute/' + id,
    method: 'get'
  })
}

export function getProductAttrInfo(productCategoryId) {
  return request({
    url: '/api/v1/mall/product-attr/attrInfos/' + productCategoryId,
    method: 'get'
  })
}
