**zustand基础使用**
```jsx
import { create } from "zustand";
/**
 * 1. 创建store
 *      1. 函数参数必须返回一个对象，对象中的属性就是状态数据，方法就是修改状态的方法
 *      2. 函数参数接收一个set函数，用于修改状态数据
 *       语法1：参数是函数，需要用到老数据的场景
 *       语法2：参数是对象，不需要用到老数据的场景 set({ count: 1 })
 */
const useStore = create((set) => ({
  // 状态数据
  count: 0,
  // 修改状态的方法
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

/**
 * 2. 绑定store到组件
 * *  使用useStore()函数，获取store中的状态数据和方法
 */
function App() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

```

**zustand异步支持**
对于异步支持不需要特殊的操作，直接在函数中编写异步逻辑，最后调用set方法传入新状态即可。
```jsx
import { create } from "zustand";
import { useEffect } from "react";
// 1. 创建store
const useStore = create((set) => ({
  channelList: [],
  fetchChannelList: async() => {
    // 异步请求
    const res = await fetch("https://geek.itheima.net/v1_0/channels");
    const data = await res.json();
    set({ channelList: data.data.channels });
  }
}));

// 2. 绑定store到组件
function App() {
  const { channelList, fetchChannelList } = useStore();

  useEffect(() => {
    fetchChannelList();
  }, [fetchChannelList])
  return (
    <div>
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
```
