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

export default Layout;
