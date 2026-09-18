import "./App.css";

import { Component } from "react";
import Hello from "./components/Hello/index.jsx";
import Welcome from "./components/Welcome/index.jsx";


// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <br />
        <Welcome />
      </div>
    )
  }
}
