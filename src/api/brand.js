import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api/v1/product-brands',
    method:'get',
    params:params
  })
}
export function createBrand(data) {
  return request({
    url:'/api/v1/product-brands',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/brand/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/brand/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteBrand(id) {
  return request({
    url:'/brand/delete/'+id,
    method:'get',
  })
}

export function getBrand(id) {
  return request({
    url:'/api/v1/product-brands/'+id,
    method:'get',
  })
}

export function updateBrand(id,data) {
  return request({
    url:'/api/v1/product-brands/'+id,
    method:'post',
    data:data
  })
}

