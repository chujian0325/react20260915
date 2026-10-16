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
    // 同步添加账单方法
    addBill(state, action) {
      state.billList.push(action.payload);
    }

  },
});

const addBillList = (data) => {
  return async (dispatch) => {
    // 编写异步请求
    const res = await axios.post("http://localhost:8888/ka", data);
    // 触发同步方法
    dispatch(addBill(res.data));
  };
}

// 异步请求
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(res.data));
  };
};
export { getBillList, addBillList };
export const { setBillList, addBill } = billSlice.actions;
export default billSlice.reducer;
