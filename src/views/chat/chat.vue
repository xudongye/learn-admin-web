<template>
  <el-row class="">
    <el-col :span="5">
      <div class="chat-brand">
        <i class="el-icon-chat-dot-square chat-icon"></i>
        <div class="chat-title">客服中心</div>
      </div>
      <component :is="currentComponent"></component>
      <div class="chat-bottom">
        <ul class="chat-nav">
          <li class="nav-icon" :class="{'nav-active': item.isActive}" @click="toggleNav(item)" v-for="(item,index) in navList" :key="index">
            <i :class="[item.icon, item.isActive ? 'icon-active' : '']"></i>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="19">
      <chat-panel></chat-panel>
    </el-col>
  </el-row>
</template>

<script>
import friendList from './friendList'
import msgList from './msgList'
import chatPanel from './chatPanel'
export default {
  components: {
    friendList,
    chatPanel,
    msgList
  },
  data() {
    return {
      navList: [
        {
          icon: 'el-icon-chat-round',
          isActive: true,
          componentName: 'msgList'
        },
        {
          icon: 'el-icon-user',
          isActive: false,
          componentName: 'friendList'
        }
      ],
      currentComponent: 'msgList'
    }
  },
  methods: {
    // 切换聊天导航栏
    toggleNav(item) {
      this.currentComponent = item.componentName
      this.navList.forEach(data => {
        if (item.icon === data.icon) {
          data.isActive = true
        } else {
          data.isActive = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: rgba(0, 0, 0, 0.03);
$color: #409EFF;

.chat-brand {
  display: flex;
  align-items: center;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  padding: 15px 20px;
  .chat-icon {
    font-size: 40px;
    color: $color;
  }
  .chat-title {
    color: #263a5b;
    font-size: 16px;
    margin-left: 10px;
  }
}

.chat-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 20.83333%;
  border-top: 1px solid $border-color;
  background: #ffffff;
  z-index: 100;
}

.chat-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav-icon {
    width: 30%;
    text-align: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding: 20px 0;
    i {
      font-size: 22px;
    }
    .icon-active {
      color: $color;
    }
  }
  .nav-active {
    border-bottom: 2px solid $color;
  }
}
</style>