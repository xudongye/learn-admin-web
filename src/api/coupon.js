import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/api/v1/mall/coupons',
    method: 'get',
    params: params
  })
}

export function createCoupon(data) {
  return request({
    url: '/coupon/create',
    method: 'post',
    data: data
  })
}

export function getCoupon(id) {
  return request({
    url: '/api/v1/mall/coupons/' + id,
    method: 'get',
  })
}

export function updateCoupon(id, data) {
  return request({
    url: '/coupon/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteCoupon(id) {
  return request({
    url: '/coupon/delete/' + id,
    method: 'post',
  })
}
