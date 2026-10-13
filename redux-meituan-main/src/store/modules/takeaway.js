import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    // 商品列表
    foodsList: [],
    // 菜单激活下标值
    activeIndex: 0,

  },
  reducers: {
    setFoods(state, action) {
      state.foodsList = action.payload;
    },
    // 更改activeIndex
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
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
export const { setFoods, changeActiveIndex } = foodsSlice.actions;
export default foodsSlice.reducer;
