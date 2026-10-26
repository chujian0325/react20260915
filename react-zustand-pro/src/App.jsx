import { create } from "zustand";
import { useEffect } from "react";
// 1. 创建store

const useStore = create((set) => ({
  // 状态数据
  count: 0,
  // 修改状态的方法
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  channelList: [],
  fetchChannelList: async() => {
    // 异步请求
    const res = await fetch("https://geek.itheima.net/v1_0/channels");
    const data = await res.json();
    console.log(data);
    set({ channelList: data.data.channels });
  }
}));

// 2. 绑定store到组件
function App() {
  const { count, increment, decrement, channelList, fetchChannelList } = useStore();

  useEffect(() => {
    fetchChannelList();
  }, [fetchChannelList])
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={fetchChannelList}>fetchChannelList</button>
      <ul>
        {
          channelList.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
