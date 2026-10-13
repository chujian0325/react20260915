import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./modules/takeaway";

const store = configureStore({
  reducer: {
    // 添加reducer
    foods: foodsReducer,
  },
})

export default store;