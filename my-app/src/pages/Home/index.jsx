import React, { Component } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home内容</h3>
        <ul className="nav nav-tabs">
          <li>
            {/* <a className="list-group-item active" href="./home-news.html"></a> */}
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            {/* <a className="list-group-item " href="./home-message.html"></a> */}
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    );
  }
}
