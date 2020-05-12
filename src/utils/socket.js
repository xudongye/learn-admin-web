
// let ws = 'ws://www.kuanghuan.shop:8080/learn/echo/user/1'
// let websocket = null

export default class WxSocket {
  host = null
  ws = null
  lockReconnect = false
  time = null
  constructor(url) {
    this.host = url
    this.initWebSocket()
  }

  initWebSocket() {
    this.ws = new WebSocket(this.host)

    this.ws.onopen = (e) => {
      console.log('websocket connect open')
    }

    // this.ws.onmessage = e => {
    //   console.log('receive message')
    // }

    this.ws.onclose = e => {
      console.log('websocket disconnect')
      this.reconnect()
    }

    this.ws.onerror = e => {
      console.log('websocket connect error')
      this.reconnect()
    }
  }

  // 重连
  reconnect() {
    if (this.lockReconnect) {
      return
    }
    this.lockReconnect = true
    this.time && clearTimeout(this.time)
    this.time = setTimeout(() => {
      this.lockReconnect = false
      this.initWebSocket()
    }, 4000)
  }

  // 发送消息
  send(content) {
    this.ws.send(content)
  }

  // 监听接收到的消息
  subscribe(params, callback) {
    this.ws.send(params)
    this.ws.onmessage = e => {
      let data = JSON.parse(e.data)
      callback(data)
    }
  }

  // 关闭连接
  close() {
    this.ws.close()
  }
}