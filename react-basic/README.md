# 一、使用create-react-app快速搭建开发环境(React18)
```bash
npm init react-app react-basic
npx create-react-app react-basic
```
将react和react-dom的版本改为18.2.0
启动项目
```bash
npm start
```
# 二、JSX
## 2.1 JSX基础-概念和本质

**什么是JSX**
概念：JSX是JavaScript和XML（HTML）的缩写，表示在JS代码中编写HTML模板结构，它是React中编写UI模板的方式
优势：
1. HTML声明式模板写法 
2. JS的可编程能力

**JSX的本质**
JSX并不是标准的JS语法，它是JS的语法糖，最终会被编译成JS代码，在浏览器中无法直接运行，需要通过解析工具(babel)解析之后才能在浏览器中运行

## 2.2 JSX基础-高频场景

**JSX中使用JS表达式**
在JSX中，可以在{}中写任何合法的JS表达式，比如变量、运算、函数调用等
1. 使用引号传递字符串
2. 使用js变量
3. 函数调用和方法调用
4. 使用js对象

注意：if语句、switch语句、变量声明属于语句，不是表达式，不能出现在{}中

**JSX中实现列表渲染**
语法：在JSX中使用原生js的map方法遍历渲染列表
```jsx
const list = [
  { id: 1, name: "Vue" },
  { id: 2, name: "React" },
  { id: 3, name: "Angular" },
];
function App() {
  return (
    <div className="App">
      {/* 渲染列表，加key */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
**JSX中实现条件渲染**
语法：可以通过逻辑与运算符&&、三元运算符(?:)实现基础的条件渲染
```jsx
const isLogin = false;
function App() {
  return (
    <div className="App">
      {/* 逻辑与&& */}
      {isLogin && <h1>hello world</h1>}
      {/* 三元运算符 */}
      {isLogin ? <h1>hello world</h1> : <h1>hello react</h1>}
    </div>
  );
}

```
**JSX中实现复杂条件渲染**
需求：列表中需要根据文章状态适配三种情况：单图、三图、无图三种模式
解决方案：自定义函数+if判断语句
```jsx
// 定义文章类型
const articleType = 3;
function getArticleType() {
  if (articleType === 1) {
    return <div>我是无图文章</div>;
  } else if (articleType === 2) {
    return <div>我是单图模式</div>;
  } else if (articleType === 3) {
    return <div>我是三图模式</div>;
  }
}
function App() {
  return (
    <div className="App">
      {/* 调用函数渲染不同模板 */}
      {getArticleType()}
    </div>
  );
}
```

# 三、React事件绑定
**基础绑定**
语法：on+事件名称={事件处理函数}，整体上遵循驼峰命名法
```jsx
function App() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

```
**使用事件对象参数**
语法：在事件回调函数中设置形参e
```jsx
function App() {
  const handleClick = (e) => {
    console.log("click", e);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
```

**传递自定义参数**
语法：事件绑定的位置改成箭头函数的写法，并传参
```jsx
function App() {
  const handleClick = (name) => {
    console.log("click", name);
  };
  return (
    <div className="App">
      <button onClick={() => handleClick("why")}>click me</button>
    </div>
  );
}
```
注意：不能直接写函数调用，这里事件绑定需要一个函数引用

**同时传递事件对象和自定义参数**
语法：在事件绑定的位置传递事件实参e和自定义参数，注意顺序对应
```jsx
function App() {
  // 传递自定义参数和事件对象
  const clickHandle2 = (name, e) => {
    console.log("click", name, e);
  };
  return (
    <div className="App">
      <button onClick={(e) => clickHandle2("jack", e)}>click me</button>
    </div>
  );
}

```

# 四、React中的组件

**组件的定义**
概念：组件是React中构建UI的基本单位，它是一个可复用的函数或类，用于描述UI的一部分

在React中，组件可以是一个函数组件（首字母大写），也可以是一个类组件
```jsx
// 1. 定义组件
function Button() {
  return <button>click me</button>;
}
// 或者写成箭头函数的形式
const Button = () => {
  return <button>click me</button>;
}
function App() {
  return (
    <div className="App">
      {/* 2. 使用组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  );
}

```










