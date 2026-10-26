import { create } from "zustand";
import { useEffect } from "react";
// 1. 拆分子模块，再组合起来
const createCounterStore = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});

const createChannelStore = (set) => ({
  channelList: [],
  fetchChannelList: async () => {
    // 异步请求
    const res = await fetch("https://geek.itheima.net/v1_0/channels");
    const data = await res.json();
    console.log(data);
    set({ channelList: data.data.channels });
  },
});
// 2. 组合store
const useStore = create((set) => ({
  ...createChannelStore(set),
  ...createCounterStore(set),
}));

function App() {
  // ✅ 单独selector订阅！！
  // const count = useStore((s) => s.count);
  // const increment = useStore((s) => s.increment);
  // const decrement = useStore((s) => s.decrement);
  // const channelList = useStore((s) => s.channelList);
  // const fetchChannelList = useStore((s) => s.fetchChannelList);
  // ✅ 一起selector订阅！！
  const { count, increment, decrement, channelList, fetchChannelList } =
    useStore();

  useEffect(() => {
    fetchChannelList();
  }, [fetchChannelList]);
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={fetchChannelList}>fetchChannelList</button>
      <ul>
        {channelList.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
