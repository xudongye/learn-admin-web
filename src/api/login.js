import request from '@/utils/request'

export function login(loginLabel, password) {
  return request({
    url: '/learn/api/v1/admin/tokens',
    method: 'post',
    data: {
      loginLabel,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/learn/api/v1/mall/admins/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/learn/api/v1/admin/tokens',
    method: 'delete'
  })
}

export function fetchList(params) {
  return request({
    url: '/learn/api/v1/mall/admins',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/admin/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/admin/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/admin/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/learn/api/v1/mall/admins/withRole/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data: data
  })
}
