// 创建商品切片
import { createSlice } from "@reduxjs/toolkit";

const goodsSlice = createSlice({
  name: "goods-slice",
  initialState: {
    // 初始数据
    name: "苹果",
    price: 10,
  },
  reducers: {
    //定义操作数据的方法
    setName(state, action) {
      state.name = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
  },
});

export default goodsSlice;
