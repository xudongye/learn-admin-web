<template>
  <el-upload action="" :http-request="uploadFile" :show-file-list="false">
    <i class="el-icon-paperclip send-attach"></i>
  </el-upload>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
    }
  },
  methods: {
    uploadFile(content) {
      let _this = this
      let mediaType = ''
      let regImg = /image/
      let regVideo = /video/
      let regVoice = /audio/
      // // 验证图片格式
      if (regImg.test(content.file.type)) {
        mediaType = 'image'
      } else if (regVideo.test(content.file.type)) {
        mediaType = 'video'
      } else if (regVoice.test(content.file.type)) {
        mediaType = 'audio'
      } else {
        mediaType = 'other'
      }
      let formData = new FormData()
      formData.append('file', content.file)
      // 上传配置
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          let complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
          _this.$emit('watchPercent', complete) // 进度条监控
        }
      }
      axios.post('/api/v1/minio/upload', formData, config).then(response => {
        if (response.status === 201) {
          let fileSource = {
            fileUrl: response.data.url,
            type: mediaType
          }
          _this.$emit('backFile', fileSource)
        } else {
          _this.$message({
            type: 'error',
            message: response.data.message
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.send-attach {
  font-size: 24px;
  color: #4c595f;
  cursor: pointer;
}
</style>