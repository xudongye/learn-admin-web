<template>
  <div>
    <div class="chat-friend">
      <svg-icon icon-class="friend-icon" class="friend-icon"></svg-icon>
      <div>
        <h5 class="friend-name">emily</h5>
        <span class="friend-status">online</span>
      </div>
    </div>
    <div class="chat-box">
      <ul>
        <li>
          <div class="chat-time"><span>今天</span></div>
          <div class="chat-message chat-message-right">
            <div class="chat-msg-text send-msg-style">
              <span>asdhasdah</span>
            </div>
          </div>
          <div class="chat-message chat-message-left">
            <div class="chat-msg-text">
              <span>sdhiadi</span>
            </div>
          </div>
          <div class="chat-message chat-message-right">
            <div class="chat-msg-text send-msg-style">
              <div class="msg-video">
                <video width="210" controls>
                  <source src="" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
          <div class="chat-message chat-message-left">
            <div class="chat-msg-text">
              <div class="msg-img"><img src="../../assets/images/404.png" alt=""></div>
            </div>
          </div>
          <div class="chat-message chat-message-left">
            <div class="chat-msg-text">
              <div class="msg-audio">
                <audio controls>
                  <source src="">
                </audio>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="chat-time"><span>今天</span></div>
          <div class="chat-message chat-message-right">
            <div class="chat-msg-text send-msg-style">
              <span>asdhasdah</span>
            </div>
          </div>
          <div class="chat-message chat-message-left">
            <div class="chat-msg-text">
              <span>sdhiadi</span>
            </div>
          </div>
          <div class="chat-message chat-message-right">
            <div class="chat-msg-text send-msg-style">
              <div class="msg-video">
                <video width="210" controls>
                  <source src="" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
          <div class="chat-message chat-message-left">
            <div class="chat-msg-text">
              <div class="msg-img"><img src="../../assets/images/404.png" alt=""></div>
            </div>
          </div>
          <div class="chat-message chat-message-left">
            <div class="chat-msg-text">
              <div class="msg-audio">
                <audio controls>
                  <source src="">
                </audio>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="send-box">
      <div class="chat-messagebar">
        <input type="text" class="input-msg">
        <div class="send-btn">
          <i class="el-icon-paperclip send-attach"></i>
          <i class="el-icon-s-promotion"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$border-color: rgba(0, 0, 0, 0.03);

// 聊天头部
.chat-friend {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid $border-color;
  .friend-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .friend-name {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 0;
  }
  .friend-status {
    color: #8A98AC;
    font-size: 14px;
  }
}

// 聊天信息记录样式
.chat-box {
  height: calc(100vh - 140px);
  overflow: auto;
  background: url('../../assets/images/chat_background.jpg') no-repeat;
  padding: 30px;
  .chat-time {
    text-align: center;
    span {
      display: inline-block;
      padding: 5px;
      background-color: rgba(129, 167, 205, 0.1);
      color: #8294ca;
      font-size: 14px;
      border-radius: 3px;
    }
  }
  .chat-msg-text {
    background-color: #ffffff;
    color: #4c595f;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 3px;
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      width: 0;
      height: 0;
      left: -10px;
      right: auto;
      top: auto;
      bottom: 0;
      border: 6px solid #ffffff;
      border-color: transparent #ffffff #ffffff transparent;
    }
  }
   .send-msg-style {
      background-color: #409EFF;
      color: #ffffff;
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        left: auto;
        right: -10px;
        top: auto;
        bottom: 0;
        border: 6px solid #409EFF;
        border-color: transparent transparent #409EFF #409EFF;
      }
   }
}

.chat-message {
  margin-bottom: 15px;
  .msg-video {
    margin-top: 5px;
  }
  .msg-img {
    width: 120px;
    img {
      width: 100%;
    }
  }
  .msg-audio {
    margin-top: 5px;
  }
}

.chat-message-right {
  text-align: right;
}

.chat-message-left {
  text-align: left;
}

// 消息发送框样式
.send-box {
  position: fixed;
  width: 79.16667%;
  bottom: 0;
  border-left: 1px solid $border-color;
  border-top: 1px solid $border-color;
  padding: 20px 30px;
}

.chat-messagebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input-msg {
    outline: none;
    border: none;
    flex: 1;
    font-size: 16px;
    color: #8A98AC;
  }
  .send-btn {
    i {
      font-size: 24px;
      color: #4c595f;
    }
    .send-attach {
      margin-right: 10px;
    }
  }
}
</style>