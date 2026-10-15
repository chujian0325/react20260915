import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
// 导入定制主题样式文件
import './theme.css'
createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} >
    <App />
  </RouterProvider>
)
