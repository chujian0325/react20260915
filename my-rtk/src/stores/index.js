// 创建store，对切片进行统一管理
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user";
import goodsSlice from "./goods";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    goods: goodsSlice.reducer,
  },
});

export default store;
