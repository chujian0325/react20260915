import { Component } from "react";
import axios from "axios";
import "./bootstrap.css";
import "./components/Search/index.css";
import Search from "./components/Search/index";
import SearchList from "./components/SearchList/index";
// 创建并暴露App组件
export default class App extends Component {
 
  

  render() {
    return (
      <div className="container">
        <Search />
        <SearchList />
      </div>
    );
  }
}
