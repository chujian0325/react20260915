React是用户构建用户界面的javascript库
是一个将数据渲染为HTML视图的开源js库

为什么要学？
1. 原生js操作DOM繁琐，效率低
2. 使用js直接操作DOM，浏览器会进行大量的重绘重排
3. 原生js没有组件化的编码方案，代码复用率低

react特点：
1. 采用组件化模式，声明式编码，提高开发效率和组件复用率。
2. 在react native中可以使用react语法进行移动端开发。（只懂js可以进行app开发）
3. 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。

React高效的原因：
1. 使用虚拟DOM，不总是直接操作页面真实DOM
2. DOM Diffing算法，最小化页面重绘

相关js库
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script> 
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>


```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>
    <!-- 引入react核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>

    <!-- 引入react-dom，用于支持react操作DOM -->
    <script
      type="text/javascript"
      src="../js/react-dom.development.js"
    ></script>
    <!-- 引入babel，用户将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <script type="text/babel">
      /*此处一定要写babel*/
      // 1. 创建虚拟DOM
      const VDOM = (
        <h1>Hello，React</h1>
      ); /**此处一定不要写引号，因为不是字符串*/
      // 2. 渲染虚拟DOM到页面

      ReactDOM.render(VDOM, document.getElementById("test"));
    </script>
  </body>
</html>

```

chrome插件：React Developer Tools 8.0.0
你写的代码是 html 文件，双击打开地址栏开头是 `file://`
React DevTools 默认**不允许读取本地文件**，所以检测不到 React，控制台就没有 Components 标签。

✅ 解决：
1. chrome 地址栏输入：`chrome://extensions/`
2. 找到 React Developer Tools → 点【详情】
3. 打开 **允许访问文件网址** 开关
4. 刷新你的 html 页面（一定要刷新！）

react组件：
1. 函数式组件
2. 类组件


组件实例的三大核心属性：state
强烈注意：
1. 组件中的render方法中的this为组件实例对象
2. 组件自定义的方法中this为undefined，如何解决？
    a. 强制绑定this:通过函数对象的bind()方法修改this指向
    b. 箭头函数
3. 状态数据，不能直接更改，要用setState()

Props


ref
不建议使用字符串形式的ref，可能会出现一些效率问题，未来版本可能弃用



React应用（基于React脚手架）
react脚手架
1. xxx脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目
  1.包含了所有需要的配置（语法检查、自动编译、自动打开浏览器、热更新等）
  2.包含了所有库/依赖
  3.可以直接运行
2. react提供了一个用于创建react项目的脚手架库：create-react-app
3. 项目的整体技术架构为：react + webpack + es6 + eslint
4. 使用脚手架开发的项目特点：模块化，组件化，工程化

创建项目并启动：
my-app是项目名称
npm create vite@latest my-app -- --template react

<!-- 组件化编码流程（通用）
1. 拆分组件
2. 实现静态组件：使用组件的静态属性展示页面效果
3. 实现动态组件
  3.1 动态显示初始化数据 -->

样式文件命名index.modules.css
import welcome from "./index.module.css";
<h1 className={welcome.title}>Welcome to the app</h1>

插件：ES7+ React/Redux/React-Native snippets
rcc + tab：react class component
rfc + tab：react function component

npm install prop-types


## 一、todoList案例相关知识点：
1. 拆分组件、实现静态组件，注意className的写法，style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
  - 某个组件使用：放在自身的state中
  - 某些组件使用：放在共同的父组件state中（官方称此操作为：状态提升）
3. 关于父子之间通信：
  1. 【父组件】给【子组件】传递数据：通过props传递
  2. 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
4. 注意defaultChecked和checked的区别，类似的还有：defaultValue和value
5. 状态在哪里，操作状态的方法就在哪里


消息订阅-发布机制
1. 工具库：PubSubJS
2. 下载：npm install pubsub-js
3. 使用：
  1. import PubSub from 'pubsub-js' //引入
  2. PubSub.subscribe('delete', function(data){ }); //订阅
  3. PubSub.publish('delete', data) //发布消息


## 二、github搜索案例相关知识点：
1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
2. ES6小知识：结构赋值+重命名
   let obj = {a: { b:1 }} 
   const {a} = obj //传统解构赋值
   const {a:{b}} = obj //连续解构赋值
   const {a:{b:value}} = obj //连续解构赋值+重命名
3. 消息订阅与发布机制
  1. 先订阅，再发布（理解：有一种隔空对话的感觉）
  2. 适用于任意组件间通信
  3. 要在组件的componentWillUnmount中取消订阅
4. fetch发送请求（关注分离的设计思想）
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${searchKey}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('请求出错', error)
  }




## 三、路由的基本使用：
React路由
npm install react-router-dom
1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签
  <Link to='/xxx'>Demo</Link>
3. 展示区写Route标签进行路径的匹配
  {/* 所有Route必须包在Routes里面 */}
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
4. <App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件：
1. 写法不同：
  一般组件：<Demo />
  路由组件：<Route path="/demo" element={<Demo />} />
2. 存放位置不同：
  一般组件：components文件夹
  路由组件：pages文件夹
3. 接收到的props不同：
  一般组件：写组件标签时传递了什么，就能收到什么
  路由组件：接收到三个固定的属性
      history:
          go: ƒ go(n)
          goBack: ƒ goBack()
          goForward: ƒ goForward()
          push: ƒ push(path, state)
          replace: ƒ replace(path, state)
      location:
          pathname: "/about"
          search: ""
          state: undefined
      match:
          params: {}
          path: "/about"
          url: "/about"

## 五、NavLink与封装MyNavLink：
1. NavLink可以实现路由链接的高亮，通过isActive指定样式名
```jsx
<NavLink
  className={({ isActive }) =>
    `list-group-item ${isActive ? "activeStyle" : ""}`
  }
  to={to}
  {...this.props}
>
  {/* {this.props.children} */}
</NavLink>
```
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容


