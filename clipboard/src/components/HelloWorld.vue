<template>
  <div class="hello">
    <van-button @click="showCopy" type="info">邀请语</van-button>
    <input class="input" type="text" v-model="input" />
    <div v-if="show" class="layer"></div>
    <div v-if="show" class="content">
      <div class="header">
        <div class="close">
          <van-icon @click="hideCopy" name="cross" />
        </div>
      </div>
      <div>可直接复制邀请语到发布到朋友圈哦</div>
      <div class="text">{{copyValue}}</div>
      <button class="btn" :data-clipboard-text="copyValue">点我复制</button>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false,
      copyValue: '',
      clipboard: null,
      input: ''
    }
  },
  methods: {
    showCopy() {
      var that = this
      this.show = true
      this.copyValue = '我是被复制的内容'
      this.clipboard = new Clipboard('.btn')
      this.clipboard.on('success', function() {
        that.$toast('复制成功');
      })
    },
    hideCopy() {
      this.show = false
      this.clipboard.destroy()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  .input {
    display: block;
    width: 200px;
    height: 40px;
    border: 1px solid #cccccc;
    margin: 0 auto;
  }
  .layer{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #000000;
    opacity: 0.6;
  }
  .content {
    width: 80%;
    height: 300px;
    background: #ffffff;
    position: fixed;
    left: 10%;
    top: 100px;
    z-index: 2;
    .header {
      width: 100%;
      height: 16px;
      .close {
        width: 16px;
        height: 16px;
        float: right;
        margin-right: 20px;
      }
    }
    .text {
      width: 80%;
      height: 100px;
      margin: 0 auto;
      border: 1px solid #cccccc;
      padding: 10px;
    }
    .btn {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #cccccc;
      background: #ffffff;
    }
  }
}
</style>

