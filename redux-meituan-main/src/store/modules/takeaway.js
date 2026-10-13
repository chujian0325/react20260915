import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
  },
  reducers: {
    setFoods(state, action) {
      state.foodsList = action.payload;
    },
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
export const { setFoods } = foodsSlice.actions;
export default foodsSlice.reducer;
