/*
 * @Author: hy
 * @Date: 2022-05-11 23:30:02
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-12 00:49:33
 * @FilePath: /clock-in/src/app.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'clock-in',
    navigationBarTextStyle: 'black'
  }
})
