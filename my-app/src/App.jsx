import { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import About from "./components/About";
import "./bootstrap2.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
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
                <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link className="list-group-item" to="/home">
                  Home
                </Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  {/* 所有Route必须包在Routes里面 */}
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
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
