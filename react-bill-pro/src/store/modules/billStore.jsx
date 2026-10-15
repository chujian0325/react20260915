import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billSlice = createSlice({
  name: "bill",
  // 数据状态status
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

// 异步请求
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(res.data));
  };
};
export { getBillList };
export const { setBillList } = billSlice.actions;
export default billSlice.reducer;
