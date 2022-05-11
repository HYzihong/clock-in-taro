/*
 * @Author: hy
 * @Date: 2022-05-11 23:30:02
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-12 00:32:57
 * @FilePath: /clock-in/src/app.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
export default defineAppConfig({
  pages: [
    'pages/mine/index',
    'pages/index/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'clock-in',
    navigationBarTextStyle: 'black'
  }
})
