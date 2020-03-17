import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/learn/api/v1/mall/product-attr-cate',
    method:'get',
    params:params
  })
}

export function createProductAttrCate(data) {
  return request({
    url:'/learn/api/v1/mall/product-attr-cate',
    method:'post',
    data:data
  })
}

export function deleteProductAttrCate(id) {
  return request({
    url:'/productAttribute/category/delete/'+id,
    method:'get'
  })
}

export function updateProductAttrCate(id,data) {
  return request({
    url:'/productAttribute/category/update/'+id,
    method:'post',
    data:data
  })
}
export function fetchListWithAttr() {
  return request({
    url:'/learn/api/v1/mall/product-attr-cate/withAttr',
    method:'get'
  })
}
