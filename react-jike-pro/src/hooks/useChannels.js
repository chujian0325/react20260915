// 封装获取频道列表的逻辑
import { useState, useEffect } from "react";
import { getChannelApI } from "../apis/article";
function useChannels() {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelApI();
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, []);

  return {
    channelList,
    setChannelList,
  };
}

export { useChannels };
