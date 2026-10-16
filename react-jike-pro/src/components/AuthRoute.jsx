// 封装高阶组件
// 有token正常跳转，无token跳转登录页面，replace防止重复点击
import { getToken } from "../utils/token";

import { Navigate } from "react-router-dom";

export function AuthRoute({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace></Navigate>;
  }
}
