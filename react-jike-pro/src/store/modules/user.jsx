import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/index";
import { setToken as _setToken, getToken } from '../../utils/token'
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
  },
});

// 异步方法完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    dispatch(setToken(res.data.token));
  };
};
export { fetchLogin };
export const { setToken } = userStore.actions;
const userReducer = userStore.reducer;
export default userReducer;
