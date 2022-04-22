<template>
<div class="container">
  <van-nav-bar class="navbar">
    <template #title>
      <span class="navbar-title">有赞骑手</span>
    </template>
    <template #left>
      <img src="../assets/logo.png" class="logo" alt="">
    </template>
    <template #right>
      <van-icon color="#fff" name="user-circle-o" size="24" />
    </template>
  </van-nav-bar>

  <router-view/>

  <van-tabbar route active-color="#e60012">
    <van-tabbar-item icon="apps-o" to="/dashboard">仪表盘</van-tabbar-item>
    <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" to="/account">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.navbar {
  /*box-shadow: 0 0 8px #eeeeee;*/
}
.navbar .logo {
  width: 28px;
  height: 28px;
}
.navbar .navbar-title {
  font-weight: bold;
}
</style>