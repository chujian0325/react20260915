import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

// 异步请求
const fetchChannelsList = () => {
  return async (dispatch) => {
    const res = await axios.get("https://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};

const { setChannels } = channelStore.actions;
export { fetchChannelsList };
const reducer = channelStore.reducer;
export default reducer;
