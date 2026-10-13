# 十七、Redux与React - 环境准备
**配套工具**
在React中使用redux，官方要求安装俩个其他插件 - Redux Toolkit 和 react-redux
1. Redux Toolkit（RTK）- 官方推荐编写Redux逻辑的方式，是一套工具的集合集，简化书写方式
  - 简化store的配置方式
  - 内置immer支持可变式状态修改
  - 内置thunk更好的异步创建
2. react-redux - 用来链接 Redux 和 React组件 的中间件

**配置基础环境**
1. 使用 CRA 快速创建 React 项目
npx create-react-app react-redux-pro
// 或者 npm create vite@latest react-redux-pro
2. 安装配套工具
npm i @reduxjs/toolkit react-redux
3. 启动项目
npm run dev

**store目录结构设计**
1. 通常集中状态管理的部分都会单独创建一个单独的 `store` 目录
2. 应用通常会有很多个子store模块，所以创建一个 `modules` 目录，在内部编写业务分类的子store
3. store中的入口文件 index.js 的作用是组合modules中所有的子模块，并导出store