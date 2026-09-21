import { Component } from "react";
import axios from "axios";
import "./bootstrap.css";
import "./components/Search/index.css";
import Search from "./components/Search/index";
import SearchList from "./components/SearchList/index";
// 创建并暴露App组件
export default class App extends Component {
  state = {
    users: [], //初始化状态，user初始值为数组
    isFirst: true, //是否第一次进入页面
    isLoading: false, //是否正在加载中
    err: "", //保存错误信息
  };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <SearchList {...this.state}></SearchList>
      </div>
    );
  }
}
