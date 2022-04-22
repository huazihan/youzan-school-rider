<template>
<div class="container">
  <van-tabs v-model:active="active" sticky>
    <van-tab title="可接单">
      <div class="list">
        <div class="item" v-for="item, index in canAcceptOrderList" :key="item.title">
          <div class="title">{{ item.title }}</div>
          <div class="desc">
            <p>出发：{{ item.start }}</p>
            <p>到达：{{ item.end }}</p>
          </div>
          <div class="action">
            <van-button class="btn" block @click="gradOrder(index)">抢单</van-button>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="配送中">
      <div class="list">
        <div class="item" v-for="item in deliverOrderList" :key="item.title">
          <div class="title">{{ item.title }}</div>
          <div class="desc">
            <p>出发：{{ item.start }}</p>
            <p>到达：{{ item.end }}</p>
          </div>
          <div class="action">
            <van-button class="btn" block to="/order-detail">查看</van-button>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import {Notify} from "vant";

export default {
  name: "OrderView",
  data() {
    return {
      active: 0,
      canAcceptOrderList: [
        {
          title: '湖北生物科技职业学院订单',
          start: '梧桐路如意混沌',
          end: '3栋611'
        },
        {
          title: '湖北生物科技职业学院订单',
          start: '梧桐路川香小厨',
          end: '4栋505'
        },
        {
          title: '湖北铁路运输职业学院订单',
          start: '梧桐路如意混沌',
          end: '1栋201'
        }
      ],
      deliverOrderList: [
        {
          title: '湖北生物科技职业学院订单',
          start: '蜜雪冰城梦想岛店',
          end: '3栋607'
        }
      ]
    }
  },
  methods: {
    gradOrder(index) {
      const item = this.canAcceptOrderList[index]
      if (Math.floor(Math.random() * 2) === 1) {
        this.deliverOrderList.push(item)
      } else {
        Notify({ type: 'success', message: '手慢了，已经被抢了'})
      }
      this.canAcceptOrderList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.list {
  padding: 10px 10px 40px 10px;
}
.item {
  border-radius: 8px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 20px;
}
.item .title {
  font-size: 16px;
  font-weight: bold;
}
.item .desc {
  font-size: 14px;
}
.action {
  margin-top: 10px;
}
.action .btn {
  height: 40px;
}
</style>