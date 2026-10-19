import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/index";
import { setToken as _setToken, getToken, removeToken } from '../../utils/token'

import { loginApI, getUserInfoApI } from  '../../apis/user'
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {}, // 用户信息
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.userInfo = {};
      state.token = "";
      removeToken();
    }
  },
});

// 异步方法完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginApI(loginForm);
    dispatch(setToken(res.data.token));
  };
};

// 获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getUserInfoApI();
    dispatch(setUserInfo(res.data));
  };
};


export { fetchLogin, fetchUserInfo };
export const { setToken, setUserInfo, clearUserInfo } = userStore.actions;
const userReducer = userStore.reducer;
export default userReducer;
