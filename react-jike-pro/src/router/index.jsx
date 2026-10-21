import Login from "../pages/Login";
import Layout from "../pages/Layout";
// import Home from "../pages/Home";
// import Article from "../pages/Article";
// import Publish from "../pages/Publish";
import { lazy } from "react";
import { Suspense } from "react";

// 路由懒加载
// 1、 lazy函数对组件进行导入
const Home = lazy(() => import("../pages/Home"));
const Article = lazy(() => import("../pages/Article"));
const Publish = lazy(() => import("../pages/Publish"));


import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from '../components/AuthRoute.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        // 2. 使用Suspense包裹组件，fallback属性指定加载时的loading组件
        element: <Suspense fallback={<div>加载中...</div>}><Home /></Suspense>,
      },
      {
        path: "/article",
        element: <Suspense fallback={<div>加载中...</div>}><Article /></Suspense>,
      },
      {
        path: "/publish",
        element: <Suspense fallback={<div>加载中...</div>}><Publish /></Suspense>,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


export default router;
