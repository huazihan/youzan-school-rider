<template>
  <div class="container">
    <van-col span="12">
      <div class="card">
        <div class="title">今日目标 - 未完成</div>
        <div class="content">
          <van-circle class="progress" color="#e60012" layer-color="#f3f3f3" text="30%" :rate="30" :speed="100" v-model:current-rate="currentRate"/>
          <p>16 / 55 单</p>
        </div>
      </div>
      <div class="card">
        <div class="title">今日收益</div>
        <div class="content">
          <p class="price">￥75</p>
        </div>
      </div>
    </van-col>

    <van-col span="12">
      <div class="card">
        <div class="title">当前状态</div>
        <div class="content">
          <p style="margin-top: 20px; font-size: 16px;">配送中</p>
          <p class="timer">{{ hour }}时 {{ min }} 分 {{ sec }}秒</p>
        </div>
      </div>
      <div class="card rank-card">
        <div class="title">区域排行</div>
        <div class="content">
          <ul>
            <li>1. 小李</li>
            <li style="color: red">2. 小王</li>
            <li>3. 小张</li>
            <li>4. 小陈</li>
          </ul>
        </div>
      </div>
    </van-col>

    <div class="currentOrder">
      <p>当前订单: 湖北生物科技职业技...</p>
      <router-link to="/order-detail">
        <van-button class="view-btn" color="linear-gradient(to right, #ff6034, #e60012)">
          立即查看
        </van-button>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "IndexView",
  data() {
    return {
      currentRate: 0,
      hour: 0,
      min: 12,
      sec: 50,
    }
  },
  mounted() {
    this.setTime()
  },
  methods: {
    setTime() {
      setInterval(() => {
        if (++this.sec === 60) {
          this.sec = 1
          if (++this.min === 60) {
            this.min = 0
            this.hour++
          }
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 10px 150px 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
}
.card {
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  margin: 10px 15px 20px 15px;
  box-shadow: 0 0 2px #ddd;
}
.card .title {
  color: #4d4d4d;
  font-size: 14px;
}
.card .content {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
}
.card .progress {
  margin-top: 20px;
}
.timer {
  font-size: 16px;
}

.price {
  font-weight: bold;
  font-size: 18px;
}

.card .btn {
  margin-top: 10px;
  height: 35px;
}

.currentOrder {
  width: 85%;
  position: fixed;
  bottom: 70px;
  left: 13px;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 3px #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.currentOrder p {
  margin: 0;
  font-size: 14px;
}

.view-btn {
  border-radius: 10px;
  height: 35px;
}

.rank-card .content ul {
  width: 100%;
  margin-top: 10px;
  padding-left: 5px;
}
.rank-card .content li {
  text-align: left;
  font-size: 16px;
  color: #4d4d4d;
  padding-bottom: 5px;
}
</style>