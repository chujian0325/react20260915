**创建项目**
npm create vite@latest react-router-pro
npm i
npm i react-router-dom // 安装react router包
npm run dev

**路由基本使用**
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// 1. 创建路由，并配置路由对应关系
const router = createBrowserRouter([
  {
    path: '/login',
    element: <div>登录页面</div>
  },
  {
    path: '/article',
    element: <div>文章页面</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 路由绑定 */}
    <RouterProvider router={router} />
  </StrictMode>,
)

```

**抽象路由模块**
文章组件
```jsx
const Article = () => {
  return <div>Article</div>;
}

export default Article;
```
登录组件
```jsx
const Login = () => {
  return <div>Login</div>;
}

export default Login;
```
router/index.jsx
```jsx
import Login from "../page/Login";
import Article from "../page/Article";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article/>,
  },
]);

export default router;

```
main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider} from 'react-router-dom'
// 1. 导入路由
import router from './router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 路由绑定 */}
    <RouterProvider router={router} />
  </StrictMode>,
)
```

**路由导航**
路由系统中的多个路由之间需要进行路由跳转，并且在跳转的同时有可能需要传递参数进行通信
- 声明式导航
声明式导航是指通过在模版中通过 `<Link/> ` 组件描述出要跳转到哪里去，比如后台管理系统的左侧菜单通常使用这种方式进行
语法说明：通过给组件的to属性指定要跳转到路由path，组件会被渲染为浏览器支持的a链接，如果需要传参直接通过字符串拼接的方式拼接参数即可
```jsx
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      Login
      <Link to="/article">跳转到文章页面</Link>
    </div>
  );
};

export default Login;
```
- 编程式导航
编程式导航是指通过 `useNavigate` 钩子得到导航方法，然后通过调用方法以命令式的形式进行路由跳转，比如想在登录请求完毕之后跳转就可以选择这种方式，更加灵活
语法说明：通过调用navigate方法传入地址path实现跳转
```jsx
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      Login
      <Link to="/article">跳转到文章页面</Link>
    
      <button onClick={()=>{navigate("/article")}}>跳转到文章页面</button>
    </div>
  );
};

export default Login;
```

**路由导航传参**
- searchParams 传参
```jsx
<button onClick={()=>{navigate("/article?id=1&title=hello")}}>searchParams传参</button>


import { useSearchParams } from "react-router-dom";
const [params] = useSearchParams();
let id = params.get("id");
```

- params 传参
```jsx
<button onClick={()=>{navigate("/article/1001")}}>Params传参</button>

```
配置路由:id作为动态路由参数
```jsx
{
  path: "/article/:id",
  element: <Article/>,
},

```
```jsx
import { useParams } from "react-router-dom";

const param2 = useParams();
let id2 = param2.id
```

**嵌套路由**
实现步骤：
1. 使用 children 属性配置路由嵌套关系
2. 使用 `<Outlet/>` 组件配置二级路由渲染位置
```jsx
{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "board",
      element: <Board />,
    },
    {
      path: "about",
      element: <About />,
    },
  ],
},
```
```jsx
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Link to="/board">面板</Link>
      <Link to="/about">关于</Link>
      {/* 子路由出口 */}
      <Outlet />
    </div>
  );
};
```

**默认二级路由**
当访问的是一级路由时，默认的二级路由组件可以得到渲染，只需要在二级路由的位置去掉path，设置index属性为true
```jsx
children: [
  {
    index: true, // 默认路由
    element: <Board />,
  },
  {
    path: "about",
    element: <About />,
  },
],
```
