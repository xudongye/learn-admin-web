import request from '@/utils/request'
export function upload(formData, config) {
  return request({
    url:'/api/v1/minio/upload',
    method:'post',
    formData: formData,
    config: config
  })
}