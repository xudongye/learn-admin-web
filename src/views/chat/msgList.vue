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
              <div class="user-top">
                <h5>Johenn no <span class="badge-num">5</span></h5>
                <time>02:30</time>
              </div>
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
    flex: 1;
    .user-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h5 {
        font-size: 15px;
        margin-bottom: 5px;
      }
      time {
        color: #8A98AC;
        font-size: 12px;
      }
      .badge-num {
        display: inline-block;
        font-size: 12px;
        padding: 3px 6px;
        background: #409EFF;
        border-radius: 3px;
        color: #ffffff;
      }
    }
    p {
      font-size: 14px;
      color: #8A98AC;
    }
  }
}
</style>