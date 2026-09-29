// 创建用户切片
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    // 初始数据
    name: "张三",
    gender: "男",
    age: 18,
  },
  reducers: {
    //定义操作数据的方法
    setName(state, action) {
      //action.type是执行的动作， action.payload是传递的数据

      // Redux Toolkit允许我们在reducers写”可变“逻辑，它并不是真正的改变状态值，因为它使用了Immer库，可以检测到”草稿状态“的变化，并且基于这些变化产生全新的不可变的状态
      //   return {
      //     ...state,
      //     name: action.payload,
      //   };
      // 简写
      state.name = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});
export default userSlice;
