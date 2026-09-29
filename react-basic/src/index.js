
// 项目的入口，从这里开始

// React必要的两个核心包
import React from "react";
import ReactDOM from "react-dom/client";

// 导入项目的根组件
import App from "./App";

// 把App组件渲染到id为root的DOM节点中
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
