<template>
<div class="container">
  <div class="profile">
    <div class="user-info">
      <img :src="require('../../assets/rider_avatar.png')" alt="">
      <p class="userName">小王</p>
    </div>
  </div>
  <div class="profile data-profile">
    <div class="info">
      <p class="title">501</p>
      <p class="desc">总单数</p>
    </div>
    <div class="info">
      <p class="title">￥1432</p>
      <p class="desc">总收益</p>
    </div>
    <div class="info">
      <p class="title"><van-icon name="star" class="star-icon"/> 4.7</p>
      <p class="desc">客户评价</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AccountView"
}
</script>

<style scoped>
.container {
  padding: 15px;
}
.profile {
  padding: 15px 25px;
  background: #fff;
  margin-bottom: 20px;
}
.user-info {
  width: 200px;
  display: flex;
  align-items: center;
}
.user-info img {
  width: 30px;
  height: 30px;
}
.user-info .userName {
  margin-left: 15px;
  font-size: 18px;
}

.data-profile {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-radius: 8px;
}
.data-profile .info {
  width: calc(33%);
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.data-profile .info p {
  margin: 0;
}
.data-profile .info .title {
  font-size: 20px;
}
.data-profile .info .desc {
  color: #4d4d4d;
  font-size: 14px;
}

.star-icon {
  color: #ffbb40;
}
</style>