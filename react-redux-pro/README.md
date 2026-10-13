# 十七、Redux与React - 环境准备
**配套工具**
在React中使用redux，官方要求安装俩个其他插件 - Redux Toolkit 和 react-redux
1. Redux Toolkit（RTK）- 官方推荐编写Redux逻辑的方式，是一套工具的集合集，简化书写方式
  - 简化store的配置方式
  - 内置immer支持可变式状态修改
  - 内置thunk更好的异步创建
2. react-redux - 用来链接 Redux 和 React组件 的中间件

**配置基础环境**
1. 使用 CRA 快速创建 React 项目
npx create-react-app react-redux-pro
// 或者 npm create vite@latest react-redux-pro
2. 安装配套工具
npm i @reduxjs/toolkit react-redux
3. 启动项目
npm run dev

**store目录结构设计**
1. 通常集中状态管理的部分都会单独创建一个单独的 `store` 目录
2. 应用通常会有很多个子store模块，所以创建一个 `modules` 目录，在内部编写业务分类的子store
3. store中的入口文件 index.js 的作用是组合modules中所有的子模块，并导出store

**使用React Toolkit 创建 counterStore**

1. 创建counterStore.js
```js
import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化state
  initialState: {
    count: 0,
  },
  // 修改数据的同步方法，支持直接修改
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// 解构出来 actionCreater 函数
const { increment, decrement } = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;
// 以按需导出的方式导出actionCreater
export { increment, decrement };
// 以默认导出的方式导出reducer
export default reducer;

```
2. 在store/index.js中组合子模块
```js
import { configureStore } from "@reduxjs/toolkit";

// 导入子模块reducer
import counterReducer from "./modules/counterStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

```
3. 为React注入store
react-redux负责把Redux和React 链接 起来，内置 Provider组件 通过 store 参数把创建好的store实例注入到应用中，链接正式建立
main.jsx
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

```
4. React组件使用store中的数据
在React组件中使用store中的数据，需要用到一个 钩子函数 - useSelector，它的作用是把store中的数据映射到组件中，使用样例如下：
```js
import { useSelector } from "react-redux";
function App() {
  const { count } = useSelector((state) => state.counter);
  return <div>{count}</div>;
}

export default App;

```
5. React组件修改store中的数据
React组件中修改store中的数据需要借助另外一个hook函数 - useDispatch，它的作用是生成提交action对象的dispatch函数，使用样例如下：
```js
import { useSelector, useDispatch } from "react-redux";
// 导入创建action函数的方法
import { increment, decrement } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch方法，用于分发action
  const dispatch = useDispatch();
  return (
    <div>
      {/* 调用dispatch,提交action */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;

```

**总结**
1. 组件中使用哪个hook函数获取store中的数据？
useSelector
2. 组件中使用哪个hook函数获取dispatch方法？
useDispatch
3. 如何得到要提交action对象？
执行store模块中导出的actionCreater方法，得到action对象

**Redux与React - 提交action传参**
需求：组件中有俩个按钮 `add to 10` 和 `add to 20` 可以直接把count值修改到对应的数字，目标count值是在组件中传递过去的，需要在提交action的时候传递参数
在reducers的同步修改方法中添加action对象参数，在调用actionCreater的时候传递参数，参数会被传递到action对象payload属性上
counterStore.js
```js
import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化state
  initialState: {
    count: 0,
  },
  // 修改数据的同步方法，支持直接修改
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // 加
    addNum: (state, action) => {
      state.count += action.payload;
    }
  },
});

// 解构出来 actionCreater 函数
const { increment, decrement, addNum } = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;
// 以按需导出的方式导出actionCreater
export { increment, decrement, addNum};
// 以默认导出的方式导出reducer
export default reducer;

```
App.js
```js
import { useSelector, useDispatch } from "react-redux";
// 导入创建action函数的方法
import { increment, decrement, addNum } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch方法，用于分发action
  const dispatch = useDispatch();
  return (
    <div>
      {/* 调用dispatch,提交action */}
      {/* <button onClick={() => dispatch(decrement())}>-</button> */}
      {count}
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={()=>{dispatch(addNum(10))}}>加10</button>
      <button onClick={()=>{dispatch(addNum(20))}}>加20</button>

    </div>
  );
}

export default App;
```

**Redux与React - 异步状态操作**
1. 创建store的写法保持不变，配置好同步修改状态的方法
2. 单独封装一个函数，在函数内部return一个新函数，在新函数中
  2.1 封装异步请求获取数据
  2.2 调用同步actionCreater传入异步数据生成一个action对象，并使用dispatch提交
3. 组件中dispatch的写法保持不变
channelStore.js
```js
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

```
App.jsx
```js
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
// 导入创建action函数的方法
import {  fetchChannelsList } from "./store/modules/channelStore";

function App() {
  const { channelList} = useSelector((state) => state.channel);
  // 得到dispatch方法，用于分发action
  const dispatch = useDispatch();

  // 使用useEffect触发异步请求
  useEffect(() => {
    dispatch(fetchChannelsList());
  },[dispatch])
  return (
    <div>
      <ul>
        {
          channelList.map(item=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
```

**Redux调试 - devtools**
安装chrome调试工具：Redux DevTools
Redux官方提供了针对于Redux的调试工具，支持实时state信息展示，action提交信息查看等



