<!--
 * @Author: hy
 * @Date: 2022-05-11 23:30:02
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-12 00:48:41
 * @FilePath: /clock-in/src/pages/index/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <!-- <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)"
        >点我</nut-button
      >
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </view> -->
  <nut-tabbar @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup lang="ts">
// import { reactive, toRefs } from "vue";
// export default {
// name: "Index",
// components: {},
// setup() {
// const state = reactive({
//   msg: "欢迎使用 NutUI3.0 开发小程序",
//   msg2: "你成功了～",
//   type: "text",
//   show: false,
//   cover: false,
// });

// const handleClick = (type, msg, cover = false) => {
//   state.show = true;
//   state.msg2 = msg;
//   state.type = type;
//   state.cover = cover;
// };
function tabSwitch(item, index) {
  console.log(item, index);
}

// return {
//   ...toRefs(state),
//   handleClick,
//   tabSwitch,
// };
// },
// };
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
