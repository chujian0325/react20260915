/**
 * 1. 该文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
 */

import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
  name: "count", //命名空间 ，用于区分不同的reducer
  initialState: {
    count: 0,
  }, //初始化状态
  reducers: {
    // 直接写修改逻辑，RTK内部用immer，可以直接state赋值
    increment: (state) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
