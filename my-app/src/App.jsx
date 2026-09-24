import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/Home/News";
import Message from "./pages/Home/Message";
import DetailWrapper from './pages/Home/Message/Detail'

import MyNavlink from "./components/MyNavLink";
import RouterHeader from "./components/RouterHeader";
import "./bootstrap2.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <RouterHeader />
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 在原生html中，靠<a>标签跳转不同的页面 */}
                {/* <a className="list-group-item" href="./about.html">
                  About
                </a>
                <a class="list-group-item active" href="./home.html">
                  Home
                </a> */}

                {/* 在React中，靠路由链接实现切换组件，编写路由链接 */}
                {/* <NavLink
                  className={({ isActive }) =>
                    `list-group-item ${isActive ? "activeStyle" : ""}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `list-group-item ${isActive ? "activeStyle" : ""}`
                  }
                  to="/home"
                >
                  Home
                </NavLink> */}
                {/* 封装组件 */}
                <MyNavlink to="/home">Home</MyNavlink>
                <MyNavlink to="/about">About</MyNavlink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  {/* 所有Route必须包在Routes里面 */}

                  {/* 注册路由 */}
                  {/* Routes只写一次，写在App.jsx里面 */}
                  <Routes>
                    {/* 有二级路由时，父路由要写*， */}
                    <Route path="/home/*" element={<Home />}>
                      <Route path="news" element={<News />} />
                      <Route path="message/*" element={<Message />}>
                        <Route path="detail/" element={<DetailWrapper />} />
                      </Route>
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route
                      path="*"
                      element={<Navigate to="/home/news" replace />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
