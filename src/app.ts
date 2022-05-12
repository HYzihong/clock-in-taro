/*
 * @Author: hy
 * @Date: 2022-05-11 23:30:02
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-12 00:42:47
 * @FilePath: /clock-in/src/app.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { createApp } from 'vue'
import { Button, Toast, Tabbar, TabbarItem, Icon } from '@nutui/nutui-taro';
import { createPinia } from 'pinia'

import './app.scss'

const App = createApp({
  onShow(options) {
    console.log(options)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App
  .use(Button)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(createPinia())

export default App
