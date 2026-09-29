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









