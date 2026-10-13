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