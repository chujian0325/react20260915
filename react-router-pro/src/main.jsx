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
