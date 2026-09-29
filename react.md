React是用户构建用户界面的javascript库
是一个将数据渲染为HTML视图的开源js库

为什么要学？
1. 原生js操作DOM繁琐，效率低
2. 使用js直接操作DOM，浏览器会进行大量的重绘重排
3. 原生js没有组件化的编码方案，代码复用率低

react特点：
1. 采用组件化模式，声明式编码，提高开发效率和组件复用率。
2. 在react native中可以使用react语法进行移动端开发。（只懂js可以进行app开发）
3. 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。

React高效的原因：
1. 使用虚拟DOM，不总是直接操作页面真实DOM
2. DOM Diffing算法，最小化页面重绘

相关js库
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script> 
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>
    <!-- 引入react核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>

    <!-- 引入react-dom，用于支持react操作DOM -->
    <script
      type="text/javascript"
      src="../js/react-dom.development.js"
    ></script>
    <!-- 引入babel，用户将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <script type="text/babel">
      /*此处一定要写babel*/
      // 1. 创建虚拟DOM
      const VDOM = (
        <h1>Hello，React</h1>
      ); /**此处一定不要写引号，因为不是字符串*/
      // 2. 渲染虚拟DOM到页面

      ReactDOM.render(VDOM, document.getElementById("test"));
    </script>
  </body>
</html>

```

chrome插件：React Developer Tools 8.0.0
你写的代码是 html 文件，双击打开地址栏开头是 `file://`
React DevTools 默认**不允许读取本地文件**，所以检测不到 React，控制台就没有 Components 标签。

✅ 解决：
1. chrome 地址栏输入：`chrome://extensions/`
2. 找到 React Developer Tools → 点【详情】
3. 打开 **允许访问文件网址** 开关
4. 刷新你的 html 页面（一定要刷新！）

react组件：
1. 函数式组件
2. 类组件


组件实例的三大核心属性：state
强烈注意：
1. 组件中的render方法中的this为组件实例对象
2. 组件自定义的方法中this为undefined，如何解决？
    a. 强制绑定this:通过函数对象的bind()方法修改this指向
    b. 箭头函数
3. 状态数据，不能直接更改，要用setState()

Props


ref
不建议使用字符串形式的ref，可能会出现一些效率问题，未来版本可能弃用



React应用（基于React脚手架）
react脚手架
1. xxx脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目
  1.包含了所有需要的配置（语法检查、自动编译、自动打开浏览器、热更新等）
  2.包含了所有库/依赖
  3.可以直接运行
2. react提供了一个用于创建react项目的脚手架库：create-react-app
3. 项目的整体技术架构为：react + webpack + es6 + eslint
4. 使用脚手架开发的项目特点：模块化，组件化，工程化

创建项目并启动：
my-app是项目名称
npm create vite@latest my-app -- --template react

<!-- 组件化编码流程（通用）
1. 拆分组件
2. 实现静态组件：使用组件的静态属性展示页面效果
3. 实现动态组件
  3.1 动态显示初始化数据 -->

样式文件命名index.modules.css
import welcome from "./index.module.css";
<h1 className={welcome.title}>Welcome to the app</h1>

插件：ES7+ React/Redux/React-Native snippets
rcc + tab：react class component
rfc + tab：react function component

npm install prop-types


## 一、todoList案例相关知识点：
1. 拆分组件、实现静态组件，注意className的写法，style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
  - 某个组件使用：放在自身的state中
  - 某些组件使用：放在共同的父组件state中（官方称此操作为：状态提升）
3. 关于父子之间通信：
  1. 【父组件】给【子组件】传递数据：通过props传递
  2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
4. 注意defaultChecked和checked的区别，类似的还有：defaultValue和value
5. 状态在哪里，操作状态的方法就在哪里


消息订阅-发布机制
1. 工具库：PubSubJS
2. 下载：npm install pubsub-js
3. 使用：
  1. import PubSub from 'pubsub-js' //引入
  2. PubSub.subscribe('delete', function(data){ }); //订阅
  3. PubSub.publish('delete', data) //发布消息


## 二、github搜索案例相关知识点：
1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
2. ES6小知识：结构赋值+重命名
   let obj = {a: { b:1 }} 
   const {a} = obj //传统解构赋值
   const {a:{b}} = obj //连续解构赋值
   const {a:{b:value}} = obj //连续解构赋值+重命名
3. 消息订阅与发布机制
  1. 先订阅，再发布（理解：有一种隔空对话的感觉）
  2. 适用于任意组件间通信
  3. 要在组件的componentWillUnmount中取消订阅
4. fetch发送请求（关注分离的设计思想）
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${searchKey}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('请求出错', error)
  }




## 三、路由的基本使用：
React路由
npm install react-router-dom
1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签
  <Link to='/xxx'>Demo</Link>
3. 展示区写Route标签进行路径的匹配
  {/* 所有Route必须包在Routes里面 */}
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
4. <App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件：
1. 写法不同：
  一般组件：<Demo />
  路由组件：<Route path="/demo" element={<Demo />} />
2. 存放位置不同：
  一般组件：components文件夹
  路由组件：pages文件夹
3. 接收到的props不同：
  一般组件：写组件标签时传递了什么，就能收到什么
  路由组件：接收到三个固定的属性
      history:
          go: ƒ go(n)
          goBack: ƒ goBack()
          goForward: ƒ goForward()
          push: ƒ push(path, state)
          replace: ƒ replace(path, state)
      location:
          pathname: "/about"
          search: ""
          state: undefined
      match:
          params: {}
          path: "/about"
          url: "/about"

## 五、NavLink与封装MyNavLink：
1. NavLink可以实现路由链接的高亮，通过isActive指定样式名
```jsx
<NavLink
  className={({ isActive }) =>
    `list-group-item ${isActive ? "activeStyle" : ""}`
  }
  to={to}
  {...this.props}
>
  {/* {this.props.children} */}
</NavLink>
```
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容

## 六、Switch的使用：（`Switch` 是 react-router v5 的组件，v6 已经移除，替换成 `<Routes>`）
1.通常情况下，path和component是一一对应的关系。
2.Switch可以提高路由匹配效率（单一匹配）
旧v5
```jsx
<Switch>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
</Switch>

```
v6正确写法
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## 七、解决多级路径刷新页面样式丢失的问题：
1. public/index.html中引入样式时不写./写/
2. public/index.html中引入样式时不写./写%PUBLIC_URL%
3. 使用HashRouter


## 八、路由的严格匹配与模糊匹配：
1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要访问的路径，且顺序要一致）
2. 开启严格匹配：<Route exact={true} path="/about" component={About} />
```jsx
{/* v5 需要写 exact 才是精确匹配 */}
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
</Switch>

```

```jsx
import { Routes, Route } from 'react-router-dom'

<Routes>
  {/* path="/" 默认精确匹配：只有访问 / 才渲染Home，/xxx 不会匹配到 */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/user/:id" element={<User />} />
  {/* path="*" 通配，匹配所有剩下的URL，用来做404 */}
  <Route path="*" element={<NotFound />} />
</Routes>

```
3. 严格匹配不要随便开启，需要时再开启，有些时候开启会导致无法继续匹配二级路由


## 九、重定向：
`Redirect` 是 **react-router v5** 的组件，**v6 已经移除了 `Redirect`，不再支持直接 import Redirect**
```jsx
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* 访问 / 直接重定向到 /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  )
}
```

** 重点区分
1. `replace={true}`：**替换当前历史记录**（推荐做路由重定向，对应旧 Redirect）
2. 不写 replace / `replace={false}`：会新增一条浏览历史，点击返回会回到上一个地址



## 十、嵌套路由
（1）配置嵌套路由
嵌套路由的核心是 “在父Route中嵌套子Route”，并通过Outlet组件指定子组件的展示位置：

父
```jsx
// App.jsx中配置产品相关的嵌套路由
import Products from './pages/Products';
import ProductDetails from './pages/Products/ProductDetails';
import NewProduct from './pages/Products/NewProduct';

<Routes>
  {/* 其他路由... */}
  {/* 父路由：path为/products，对应Products组件 */}
  <Route path="/products" element={<Products />}>
    {/* 子路由：路径是相对路径（无需加/products前缀） */}
    <Route path=":productId" element={<ProductDetails />} /> {/* 产品详情：/products/1 */}
    <Route path="new" element={<NewProduct />} /> {/* 新增产品：/products/new */}
  </Route>
</Routes>


```

（2）用 Outlet 指定子组件位置
父组件（Products）中需要通过Outlet组件定义 “子组件在哪里展示”，类似 “占位符”：
```jsx
// src/pages/Products.jsx
import { Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>产品列表（父页面）</h1>
      {/* 子路由对应的组件会在这里展示 */}
      <Outlet />
    </div>
  );
};

export default Products;

```
（3）子组件实现
子组件（ProductDetails和NewProduct）只需正常定义，无需特殊配置：
```jsx
// src/pages/Products/ProductDetails.jsx
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // 获取产品ID
  return <p>产品详情：ID={productId}</p>;
};

export default ProductDetails;

// src/pages/Products/NewProduct.js
const NewProduct = () => {
  return <p>新增产品表单</p>;
};

export default NewProduct;
```

## 十一、路由传参
1. **params 传参**
   1. 路由链接（携带参数）：
      ```jsx
      <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
      ```
   2. 注册路由（声明接收）：
      ```jsx
      <Route path="/home/message/detail/:id" element={<Detail />} />
      ```
   3. 接收参数：
      ```jsx
      const { id, title } = useParams()
      ```
2. **search 传参**
   1. 路由链接（携带参数）：
      ```jsx
      <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
      ```
   2. 注册路由（无需声明，正常注册即可）：
      ```jsx
      <Route path="/home/message/detail" element={<Detail />} />
      ```
   3. 接收参数：
      ```jsx
      const search = useLocation().search
      const [params] = URLSearchParams.parse(search)
      ```
    备注：获取到的 search 是urlencoded编码字符串，需要借助 querystring 库解析。
3. **state 传参**
state 是**隐式参数**，不会出现在 URL 上，刷新页面后**会丢失**(清除缓存后就丢失了)！
   1. 路由链接（携带参数）：
      ```jsx
      <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
      ```
   2. 注册路由（无需声明，正常注册即可）：
      ```jsx
      <Route path="/home/message/detail" element={<Detail />} />
      ```
   3. 接收参数：
      ```jsx
      const { state } = useLocation()
  
      ```
总结
**state：刷新页面直接消失（存内存）**
**params、search：刷新页面还在（存在 URL 地址栏）**


## 十二、编程式路由导航
```jsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

// 跳转到指定页面
navigate('/home/message/detail', { state: { id: msgObj.id, title: msgObj.title } })

// 后退
navigate(-1)
// 前进
navigate(1)
// 替换当前页面
navigate('/home/message/detail', { replace: true })
```
示例：
```jsx
import React, { Component } from "react";
import { Link, Routes, Route, Outlet, useNavigate } from "react-router-dom";
// ========== 类组件本体 ==========
class Message extends Component {
  state = {
    messages: [
      {
        id: "01",
        title: "消息1",
      },
      {
        id: "02",
        title: "消息2",
      },
      {
        id: "03",
        title: "消息3",
      },
    ],
  };
  pushShow = (msg) => {
    // 路由跳转+paramas传参
    this.props.navigate(`/home/message/detail/${msg.id}/${msg.title}`); //push: 默认true，表示添加新路由，而不是替换当前路由
    // 路由跳转+search传参
    // this.props.navigate(`/home/message/detail?id=${msg.id}&title=${msg.title}`); //push: 默认true，表示添加新路由，而不是替换当前路由
    // 路由跳转+state传参
    // this.props.navigate(`/home/message/detail`, {
    //   state: {
    //     id: msg.id,
    //     title: msg.title,
    //   },
    // })
  };
  replaceShow = (msg) => {
    this.props.navigate(`/home/message/detail/${msg.id}/${msg.title}`, {
      replace: true, //replace: true表示替换当前路由，而不是添加新路由
    });
  };

  goBack = () => {
    this.props.navigate(-1); //返回上一级路由
  };
  goForward = () => {
    this.props.navigate(1); //前进到下一个路由
  };
  render() {
    const messages = this.state.messages;
    return (
      <div>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                <Link
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </Link>
                &nbsp;
                <button onClick={() => this.pushShow(message)}>push查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(message)}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        {/* 子路由Detail在这里渲染 */}
        <Outlet />
        <button onClick={() => this.goBack()}>回退</button>
        <button onClick={() => this.goForward()}>前进</button>
      </div>
    );
  }
}
// ========== 包装层：函数组件调用useNavigate，传给类组件 ==========
function MessageWrapper() {
  const navigate = useNavigate();
  console.log("MessageWrapper", navigate);
  return <Message navigate={navigate} />;
}

export default MessageWrapper;

```

## 十三、BrowserRouter和HashRouter的区别

1. 底层原理不一样：
   - BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
   - HashRouter使用的是URL的哈希值。
2. URL表现形式不一样：
   - BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
   - HashRouter的路径包含#，例如：localhost:3000/#/demo/test
3. 刷新后对路由state参数的影响：
   - BrowserRouter没有任何影响，因为state保存在history对象中。
   - HashRouter刷新后会导致路由state参数的丢失。
4. 备注：HashRouter可以用于解决一些路径错误相关的问题。


React UI 组件库
material-ui（国外）
ant-design（国内蚂蚁金服）
element-ui（饿了么）https://github.com/elemefe/element-react
vant（手机端UI组件库，有赞团队维护）https://github.com/3lang3/react-vant

antd的使用
https://ant.design/docs/react/getting-started-cn
安装
npm install antd --save
在vite中使用
https://ant.design/docs/react/use-with-vite-cn

redux的使用
中文官网：https://cn.redux.js.org/
英文官网：https://redux.js.org/

redux是什么
1. redux是一个专门用于做**状态管理**的JS库（不是react插件库）。
2. 它可以用在react、vue、angular等项目中，但基本与react配合使用。
3. 作用：集中管理react应用中多个组件**共享**的状态（数据）。

什么情况下需要使用redux
1. 某个组件的状态，需要让其他组件可以随时拿到（共享）。
2. 一个组件需要改变另一个组件的状态（通信）。
3. 总体原则：能不用就不用，如果不用比较吃力才考虑使用。


### 新版：Redux Toolkit（RTK，官方推荐，现在项目优先用这个）

RTK 封装了冗余代码，内置 thunk、devtools，不用手写 action type、reducer 样板代码。
1. 添加 Redux Toolkit 和 React-Redux 依赖包到你的项目中：
```bash
npm install @reduxjs/toolkit react-redux
```

2. 创建 src/app/store.js 文件。从 Redux Toolkit 引入 configureStore API。我们从创建一个空的 Redux store 开始，并且导出它:
app/store.js
```jsx
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})
```
上面代码创建了 Redux store ，并且自动配置了 Redux DevTools 扩展 ，这样你就可以在开发时调试 store。

3. 为 React 提供 Redux Store
创建 store 后，便可以在 React 组件中使用它。 在 src/index.js 中引入我们刚刚创建的 store , 通过 React-Redux 的 <Provider>将 <App> 包裹起来,并将 store 作为 prop 传入。

index.js
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
4. 创建 Redux State Slice
创建 src/features/counter/counterSlice.js 文件。在该文件中从 Redux Toolkit 引入 createSlice API。

创建 slice 需要一个字符串名称来标识切片、一个初始 state 以及一个或多个定义了该如何更新 state 的 reducer 函数。slice 创建后 ，我们可以导出 slice 中生成的 Redux action creators 和 reducer 函数。

Redux 要求我们通过创建数据副本和更新数据副本，来实现不可变地写入所有状态更新。不过 Redux Toolkit createSlice 和 createReducer 在内部使用 Immer 允许我们编写“可变”的更新逻辑，变成正确的不可变更新。
```jsx
features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0 // 初始状态
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```
5. 
将 Slice Reducers 添加到 Store 中
下一步，我们需要从计数切片中引入 reducer 函数，并将它添加到我们的 store 中。通过在 reducer 参数中定义一个字段，我们告诉 store 使用这个 slice reducer 函数来处理对该状态的所有更新。

app/store.js
```jsx
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer // 模块名，reducer名,可以放多个slice
  }
})
```
6. 在 React 组件中使用 Redux 状态和操作
现在我们可以使用 React-Redux 钩子让 React 组件与 Redux store 交互。我们可以使用 useSelector 从 store 中读取数据，使用 useDispatch dispatch actions。创建包含 <Counter> 组件的 src/features/counter/Counter.js 文件，然后将该组件导入 App.js 并在 <App> 中渲染它。

features/counter/Counter.js
```jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

// 这里要写函数式组件，因为要使用useSelector和useDispatch
export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
```
现在，每当你点击”递增“和“递减”按钮。

会 dispatch 对应的 Redux action 到 store
在计数器切片对应的 reducer 中将看到 action 并更新其状态
<Counter>组件将从 store 中看到新的状态，并使用新数据重新渲染组件




react-rtk
npm install @reduxjs/toolkit react-redux


所谓切片：就是初始数据以及操作数据的方法，一个切片就是一个reducer
1. 创建切片
```jsx
// 创建用户切片
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-slice",// 切片名称
  initialState: {
    // 初始数据
    name: "张三",
    gender: "男",
    age: 18,
  },
  reducers: {
    //定义操作数据的方法
    setName(state, action) {
      //action.type是执行的动作， action.payload是传递的数据

      // Redux Toolkit允许我们在reducers写”可变“逻辑，它并不是真正的改变状态值，因为它使用了Immer库，可以检测到”草稿状态“的变化，并且基于这些变化产生全新的不可变的状态
      //   return {
      //     ...state,
      //     name: action.payload,
      //   };
      // 简写
      state.name = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});
export default userSlice;

```
2. 在store中引入切片
```jsx
// 创建store，对切片进行统一管理
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user";
import goodsSlice from "./goods";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    goods: goodsSlice.reducer,
  },
});

export default store;

```
3. main.jsx中配置store
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './stores/index.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

```
4. 在组件中引入useSelector和useDispatch
```jsx
import { useSelector, useDispatch } from "react-redux";
import userSlice from "./stores/user.js";

const { setAge } = userSlice.actions;
// setAge(user.age + 1) = {type: "user-slice/setAge", payload: user.age + 1};
const Child = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <h1>子组件-- {JSON.stringify(user)}</h1>
      <button
        onClick={() =>
          dispatch({ type: "user-slice/setAge", payload: user.age + 1 })
        }
      >
        增加
      </button>
      {/*简化写法*/}
      <button onClick={() => dispatch(setAge(user.age + 1))}>增加</button>
    </>
  );
};

export default Child;
```


## Mobx的使用
项目中安装
1. 先有一个react项目
```bash
npm create vite@latest
```
2. 安装相应模块（2选1）
```bash
npm install mobx mobx-react #支持函数组件和类组件
npm install mobx mobx-react-lite #只支持函数组件（本项目选择这个）
```

如何组织代码
state  状态  数据
action 动作  操作数据的方法
```jsx
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
class User {
  // 状态（成员属性）
  name = "张三";
  age = 18;

  constructor(name, age) {
    // makeAutoObservable(this); //可以把对象转为可以被观察的对象，如果组件中要用解构，必须设置autoBind为true
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // 动作（成员方法）
  // 计算出生年份
  // computed计算属性
  getBronYear() {
    return new Date().getFullYear() - this.age;
  }
  changeName(newName) {
    this.name = newName;
  }

  increaseAge() {
    this.age += 1;
  }

  decreaseAge() {
    this.age -= 1;
  }
}
// 得到一个可以被观察的对象
const user = new User("李四", 20);
// 创建一个有观察能力的组件
const MyComponent = observer(({ store }) => {
  console.log("store", store);
  const { name, age, changeName, increaseAge, decreaseAge, getBronYear } =
    store;
  return (
    <>
      <h1>姓名：{store.name}</h1>
      <h1>年龄：{store.age}</h1>
      <button onClick={() => store.changeName("王五")}>修改姓名</button>
      <button onClick={() => store.increaseAge()}>增加年龄</button>
      <button onClick={() => store.decreaseAge()}>减少年龄</button>
      <hr />
      <h1>姓名：{name}</h1>
      <h1>年龄：{age}</h1>
      <h1>出生年份：{getBronYear()}</h1>
      <button onClick={() => changeName("王五")}>修改姓名</button>
      <button onClick={() => increaseAge()}>增加年龄</button>
      <button onClick={() => decreaseAge()}>减少年龄</button>
    </>
  );
});
function App() {
  return (
    <>
      <h1>哈哈哈</h1>
      <MyComponent store={user} />
    </>
  );
}

export default App;
```

