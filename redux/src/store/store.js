/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入configureStore，自动创建store对象
import { configureStore } from "@reduxjs/toolkit";
// 引入为Count组件服务的reducer
import countReducer from "./count_reducer";

// 暴露store对象
export const store = configureStore({
  reducer: {
    counter: countReducer, //模块名，reducer名
    //可以放多个slice
  },
});
