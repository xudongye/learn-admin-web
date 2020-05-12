<template>
  <div>
    <div class="input-search">
      <el-input size="small" placeholder="请输入好友名">
        <i slot="suffix" class="el-icon-search  el-input__icon"></i>
      </el-input>
    </div>
    <div class="friend-box">
      <ul>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
        <li class="friend-list">
          <div class="friend-item">
            <div class="head-icon"><svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon></div>
            <div class="user-info">
              <h5>Johenn no</h5>
              <p>sdhasdhahhhas</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
.input-search {
  padding: 15px;
}

.friend-box {
  height: calc(100vh - 200px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.friend-list {
  padding: 15px;
  cursor: pointer;
  &:hover, &:active {
    background-color: #f1f3f4;
    border-right: 2px solid #409EFF;
  }
}

.friend-item {
  display: flex;
  align-items: center;
  .head-icon {
    margin-right: 10px;
    .friend-icon {
      width: 40px;
      height: 40px;
    }
  }
  .user-info {
    word-break: break-word;
    h5 {
      font-size: 15px;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      color: #8A98AC;
    }
  }
}
</style>