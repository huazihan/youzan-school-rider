<template>
<div class="container">
  <van-nav-bar class="navbar" title="订单详情" left-arrow @click-left="back()"></van-nav-bar>
  <div class="banner">
  </div>
  <div class="order-info info">
    <div class="title" v-if="status === -1">已取消</div>
    <div class="title" v-if="status === 0">待取餐</div>
    <div class="title" v-if="status === 1">配送中</div>
    <div class="title" v-if="status === 2">已送达</div>
    <div class="order-title">湖北生物科技职业学院订单</div>
    <div class="start">出发：蜜雪冰城梦想岛店</div>
    <div class="end">到达：3栋男生宿舍楼-3607</div>
  </div>
  <div class="order-contact info">
    <div class="title">联系人</div>
    <div class="username">称呼：李先生</div>
    <div class="phone">电话：13333333333</div>
    <div class="reason">备注：无</div>
  </div>
  <div class="order-code info">
    <div class="title">取餐码</div>
    <img :src="require('../assets/barcode.gif')" alt="">
  </div>

  <div class="action" v-if="status === 1 || status === 0">
    <van-button class="btn" type="primary" block @click="done()">订单送达</van-button>
    <van-button class="btn" block @click="cancel()">取消订单</van-button>
  </div>
</div>
</template>

<script>
import {Dialog} from "vant";

export default {
  name: "OrderDetail",
  data() {
    return {
      // -1:已取消 0:待取餐 1:配送中 2:已送达
      status: 1
    }
  },
  methods: {
    back() {
      history.back()
    },
    done() {
      Dialog.confirm({
        title: '提示',
        message: '确认已送达了吗？'
      }).then(() => {
        this.status = 2
      }).catch(() => {})
    },
    cancel() {
      Dialog.confirm({
        title: '警告',
        message: '配送中取消订单可能会需要承担罚款'
      }).then(() => {
        this.status = -1
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
.banner {
  height: 150px;
  background-color: #1989fa87;
}

.info {
  width: 80%;
  background-color: #fff;
  box-shadow: 0 0 3px #c0c0c0;
  border-radius: 5px 5px 0 0;
  padding: 20px;
  margin: 20px auto 0 auto;
}

.order-info {
  height: 110px;
  margin-top: -100px;
}

.order-code {
  margin-top: 20px;
}
.order-code img {
  width: 100%;
  margin-top: 20px;
}

.title {
  font-weight: bold;
  font-size: 20px;
}
.order-title {
  margin-top: 10px;
}
.start, .end {
  font-size: 14px;
}
.start {
  margin-top: 15px;
}
.end {
  margin-top: 2px;
}

.order-contact .username, .phone , .reason{
  font-size: 15px;
}
.order-contact .username {
  margin-top: 15px;
}
.order-contact .phone, .reason {
  margin-top: 3px;
}


.action {
  width: 90%;
  margin: 0 auto;
}
.btn {
  margin-top: 20px;
}

.container {
  padding-bottom: 50px;
}
</style>