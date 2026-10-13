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