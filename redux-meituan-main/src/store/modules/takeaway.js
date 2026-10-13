import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    // 商品列表
    foodsList: [],
    // 菜单激活下标值
    activeIndex: 0,
    // 购物车列表
    cartList: [],

  },
  reducers: {
    setFoods(state, action) {
      state.foodsList = action.payload;
    },
    // 更改activeIndex
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    // 添加购物车
    addCart (state, action) {
      // 是否添加过？以action.payload.id去cartList中匹配 匹配到了 添加过
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    },
    // 增加
    increment (state, action) {
      const item = state.cartList.find(item => item.id === action.payload)
      item.count++
    },
    decrement (state, action) {
      const item = state.cartList.find(item => item.id === action.payload)
      if (item.count > 1) {
        item.count--
      }
    },
    // 清除购物车
    clearCart (state) {
      state.cartList = []
    }
  },
});

// 接口数据
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoods(res.data));
  };
};

export { fetchFoodsList };
export const { setFoods, changeActiveIndex, addCart, increment, decrement, clearCart } = foodsSlice.actions;
export default foodsSlice.reducer;
